import React, {useCallback, useEffect, useState} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useForm, Controller, useFieldArray} from 'react-hook-form';
import {BackHandler, FlatList, View} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Appbar,
  TextInput,
  FAB,
  ProgressBar,
  HelperText,
} from 'react-native-paper';
import EventFormModal, {
  schema as eventSchema,
} from '~components/EventFormModal';
import EmptyState from '~components/EmptyState';
import ConfirmDialog from '~components/ConfirmDialog';
import {EditTimetableInput} from '~graphql/__generated__/graphql';
import styles from './styles';

interface Props {
  autoFocus?: boolean;
  loading?: boolean;
  onSubmit: (values: EditTimetableInput) => void;
}

const schema = yup
  .object({
    id: yup.string().optional(),
    title: yup
      .string()
      .trim()
      .max(2, () => 'Title is too long')
      .required('Title is required'),
    events: yup.array().of(eventSchema).required(),
  })
  .noUnknown()
  .required();

export default function TimetableForm({
  autoFocus = true,
  loading,
  onSubmit,
}: Props) {
  const navigation = useNavigation();
  const [addEventModalVisible, setAddEventFormVisible] = useState(false);
  const [confirmDiscardVisible, setConfirmDiscardVisible] = useState(false);

  const toggleAddEventForm = useCallback(() => {
    setAddEventFormVisible(visible => !visible);
  }, []);

  const toggleConfirmDialog = useCallback(
    () => setConfirmDiscardVisible(visible => !visible),
    [],
  );

  const {
    control,
    formState: {isDirty, touchedFields, errors},
    handleSubmit,
    reset,
  } = useForm<EditTimetableInput>({
    resolver: yupResolver(schema),
  });

  const {fields} = useFieldArray({
    control,
    name: 'events',
    keyName: 'key',
  });

  useEffect(() => {
    reset({
      title: '',
      events: [],
    });
  }, []);

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (isDirty) {
          toggleConfirmDialog();
          return true;
        }
        return false;
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => subscription.remove();
    }, [isDirty]),
  );

  return (
    <View style={styles.container}>
      <Appbar>
        <Appbar.Action
          onPress={isDirty ? toggleConfirmDialog : navigation.goBack}
          icon="x"
        />
        <Appbar.Content title="" />
        <Appbar.Action
          icon="check"
          disabled={loading || !isDirty}
          onPress={handleSubmit(onSubmit)}
        />
      </Appbar>
      <ProgressBar visible={loading} />
      <FlatList
        data={fields}
        contentContainerStyle={styles.contentContainer}
        renderItem={() => null}
        keyExtractor={item => item.key}
        ListHeaderComponent={
          <Controller
            control={control}
            name="title"
            render={({field: {value, onBlur, onChange}}) => (
              <>
                <TextInput
                  mode="outlined"
                  label="Title"
                  autoFocus={autoFocus}
                  placeholder="Example: My Lectures"
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  error={Boolean(touchedFields.title && errors.title?.message)}
                />
                {Boolean(touchedFields.title && errors.title?.message) && (
                  <HelperText padding="none" type="error">
                    {errors.title?.message as string}
                  </HelperText>
                )}
              </>
            )}
          />
        }
        ListEmptyComponent={
          <EmptyState
            title="Add events"
            message="Example: Lectures, Exams, and Tests."
            style={styles.emptyList}
          />
        }
      />
      <FAB icon="edit-2" style={styles.fab} onPress={toggleAddEventForm} />
      <EventFormModal
        autoFocus
        visible={addEventModalVisible}
        onDismiss={toggleAddEventForm}
      />
      <ConfirmDialog
        visible={confirmDiscardVisible}
        title="Discard changes?"
        message="You have unsaved changes. Are you sure to discard them and leave the screen?"
        onConfirm={navigation.goBack}
        onDismiss={toggleConfirmDialog}
      />
    </View>
  );
}
