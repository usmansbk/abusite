import React, {useEffect} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {ScrollView, SafeAreaView, View} from 'react-native';
import {
  Appbar,
  Modal,
  Portal,
  ProgressBar,
  TextInput,
  useTheme,
  HelperText,
  Divider,
} from 'react-native-paper';
import SelectInput, {SelectOption} from '~components/SelectInput';
import DateTimeInput from '~components/DateTimeInput';
import {EditEventInput} from '~graphql/__generated__/graphql';
import {getCurrentDate} from '~utils/dateTime';
import styles from './styles';

interface Props {
  visible: boolean;
  onDismiss: () => void;
  title?: string;
  autoFocus?: boolean;
  loading?: boolean;
  timetables?: SelectOption[];
}

export const schema = yup
  .object({
    id: yup.string().optional(),
    title: yup.string().trim().required('Title is required'),
    description: yup
      .string()
      .trim()
      .max(2048, () => 'Description is too long')
      .nullable(),
    timetableId: yup.string().optional(),
    startDate: yup.date().required(),
    startTime: yup.string().optional().nullable(),
    endTime: yup.string().optional().nullable(),
  })
  .noUnknown()
  .required();

const repeatOptions = [
  {value: 'DAILY', label: 'Every day'},
  {value: 'WEEKLY', label: 'Every week'},
  {value: 'MONTHLY', label: 'Every month'},
  {value: 'YEARLY', label: 'Every year'},
];

export default function EventFormModal({
  visible,
  onDismiss,
  title,
  autoFocus,
  loading,
  timetables,
}: Props) {
  const {colors} = useTheme();

  const {
    control,
    reset,
    formState: {touchedFields, errors},
  } = useForm<EditEventInput>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (visible) {
      reset({
        title: '',
        description: '',
        startDate: getCurrentDate(),
        startTime: null,
        endTime: null,
      });
    }
  }, [visible]);

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        style={styles.modalContainer}
        contentContainerStyle={styles.modalContentContainer}>
        <SafeAreaView style={{backgroundColor: colors.background}}>
          <Appbar>
            <Appbar.Action icon="x" onPress={onDismiss} />
            <Appbar.Content title={title} />
            <Appbar.Action disabled={loading} icon="check" />
          </Appbar>
          <Divider />
          {loading && <ProgressBar visible={loading} />}
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <Controller
              control={control}
              name="title"
              render={({field: {onBlur, onChange, value}}) => (
                <>
                  <TextInput
                    label="Title"
                    mode="outlined"
                    placeholder="Example: Maths101"
                    autoFocus={autoFocus}
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    error={Boolean(
                      touchedFields.title && errors.title?.message,
                    )}
                  />
                  {Boolean(touchedFields.title && errors.title?.message) && (
                    <HelperText padding="none" type="error">
                      {errors.title?.message as string}
                    </HelperText>
                  )}
                </>
              )}
            />

            <View style={styles.gap}>
              <Controller
                control={control}
                name="startDate"
                render={({field: {value, onChange}}) => (
                  <DateTimeInput
                    required
                    mode="date"
                    value={value}
                    label="Date"
                    placeholder="Date"
                    onChange={onChange}
                  />
                )}
              />
            </View>
            <View style={[styles.row, styles.gap]}>
              <View style={styles.span}>
                <Controller
                  control={control}
                  name="startTime"
                  render={({field: {value, onChange}}) => (
                    <DateTimeInput
                      mode="time"
                      value={value}
                      label="From"
                      placeholder="Time"
                      onChange={onChange}
                    />
                  )}
                />
              </View>
              <View style={styles.rowGap} />
              <View style={styles.span}>
                <Controller
                  control={control}
                  name="endTime"
                  render={({field: {value, onChange}}) => (
                    <DateTimeInput
                      mode="time"
                      value={value}
                      label="To"
                      placeholder="Time"
                      onChange={onChange}
                    />
                  )}
                />
              </View>
            </View>

            <View style={styles.gap}>
              <Controller
                control={control}
                name="repeat"
                render={({field: {value, onChange}}) => (
                  <SelectInput
                    value={value}
                    label="Repeat"
                    placeholder="Every when?"
                    onChange={onChange}
                    options={repeatOptions}
                  />
                )}
              />
            </View>

            {timetables && (
              <View style={styles.gap}>
                <Controller
                  control={control}
                  name="timetableId"
                  render={({field: {value, onChange}}) => (
                    <SelectInput
                      value={value}
                      label="Timetable"
                      onChange={onChange}
                      options={timetables}
                    />
                  )}
                />
              </View>
            )}

            <Controller
              control={control}
              name="description"
              render={({field: {onBlur, onChange, value}}) => (
                <>
                  <TextInput
                    multiline
                    label="Description"
                    mode="outlined"
                    placeholder="Add description"
                    style={styles.gap}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    error={Boolean(
                      touchedFields.description && errors.description?.message,
                    )}
                  />
                  {Boolean(
                    touchedFields.description && errors.description?.message,
                  ) && (
                    <HelperText padding="none" type="error">
                      {errors.description?.message as string}
                    </HelperText>
                  )}
                </>
              )}
            />
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </Portal>
  );
}
