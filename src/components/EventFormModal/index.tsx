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
} from 'react-native-paper';
import PickerInput from '~components/PickerInput';
import {EditEventInput, Timetable} from '~graphql/__generated__/graphql';
import styles from './styles';

interface Props {
  visible: boolean;
  onDismiss: () => void;
  title?: string;
  autoFocus?: boolean;
  loading?: boolean;
  timetables?: Timetable[];
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
    startAt: yup.date().required(),
    endAt: yup.date().optional().nullable(),
  })
  .noUnknown()
  .required();

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
    reset({
      title: '',
      description: '',
      endAt: null,
    });
  }, []);

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
          <ProgressBar visible={loading} />
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
              <PickerInput
                value={null}
                label="Date"
                placeholder="Date"
                onPress={() => null}
              />
            </View>

            <View style={[styles.row, styles.gap]}>
              <View style={styles.span}>
                <PickerInput
                  value={null}
                  label="From"
                  placeholder="Time"
                  onPress={() => null}
                  onClear={() => null}
                />
              </View>
              <View style={styles.rowGap} />
              <View style={styles.span}>
                <PickerInput
                  label="To"
                  value={null}
                  placeholder="Time"
                  onPress={() => null}
                  onClear={() => null}
                />
              </View>
            </View>

            <View style={styles.gap}>
              <PickerInput
                value={null}
                label="Repeat"
                placeholder="Every when?"
                onPress={() => null}
                onClear={() => null}
              />
            </View>

            {timetables && (
              <View style={styles.gap}>
                <PickerInput
                  value={null}
                  label="Timetable"
                  onPress={() => null}
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
                    onChange={onChange}
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
