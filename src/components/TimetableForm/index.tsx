import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useForm, Controller, useFieldArray} from 'react-hook-form';
import {BackHandler, SectionList, ListRenderItem, View} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Appbar,
  TextInput,
  FAB,
  ProgressBar,
  HelperText,
  Divider,
} from 'react-native-paper';
import groupBy from 'lodash.groupby';
import EventFormModal, {
  schema as eventSchema,
} from '~components/EventFormModal';
import EmptyState from '~components/EmptyState';
import ConfirmDialog from '~components/ConfirmDialog';
import {
  EditEventInput,
  EditTimetableInput,
} from '~graphql/__generated__/graphql';
import EventItem, {ItemT} from './EventItem';
import DateHeader from './DateHeader';
import styles from './styles';

interface Props {
  autoFocus?: boolean;
  loading?: boolean;
  onSubmit: (values: EditTimetableInput) => void;
  defaultValues?: EditTimetableInput | null;
  disableClean?: boolean;
}

const schema = yup
  .object({
    id: yup.string().optional(),
    title: yup
      .string()
      .trim()
      .max(100, () => 'Title is too long')
      .required('Title is required'),
    events: yup.array().of(eventSchema).required(),
  })
  .noUnknown()
  .required();

export default function TimetableForm({
  autoFocus = true,
  loading,
  onSubmit,
  defaultValues,
  disableClean = true,
}: Props) {
  const navigation = useNavigation();
  const [addEventModalVisible, setAddEventFormVisible] = useState(false);
  const [editEvent, setEditEvent] = useState<ItemT | null>(null);
  const [confirmDiscardVisible, setConfirmDiscardVisible] = useState(false);

  const toggleAddEventForm = useCallback(() => {
    setAddEventFormVisible(visible => !visible);
  }, []);

  const toggleConfirmDialog = useCallback(
    () => setConfirmDiscardVisible(visible => !visible),
    [],
  );

  const hideEditModal = useCallback(() => setEditEvent(null), []);

  const {
    control,
    formState: {isDirty, touchedFields, errors},
    handleSubmit,
    reset,
  } = useForm<EditTimetableInput>({
    resolver: yupResolver(schema),
  });

  const {fields, append, remove, update} = useFieldArray({
    control,
    name: 'events',
    keyName: 'key',
  });

  useEffect(() => {
    reset({
      title: '',
      events: [],
      ...defaultValues,
    });
  }, [defaultValues]);

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

  const addEvent = useCallback(
    (event: EditEventInput) => {
      append(event);
      setAddEventFormVisible(false);
    },
    [append],
  );

  const removeEvent = useCallback(
    (event: ItemT) => {
      const index = fields.findIndex(item => item.key === event.key);
      remove(index);
    },
    [fields, remove],
  );

  const updateEvent = useCallback(
    (event: EditEventInput) => {
      const index = fields.findIndex(item => item.key === editEvent?.key);
      update(index, event);
      hideEditModal();
    },
    [fields, update, editEvent],
  );

  const renderItem: ListRenderItem<ItemT> = useCallback(
    ({item}) => (
      <EventItem
        item={item}
        onPressItem={setEditEvent}
        onDuplicateItem={append}
        onDeleteItem={removeEvent}
      />
    ),
    [removeEvent],
  );

  const sections = useMemo(
    () =>
      Object.entries(groupBy(fields, 'startDate'))
        .map(([title, data]) => ({
          title,
          data: data.sort((a, b) => {
            if (a.startTime && b.startTime) {
              return a.startTime.localeCompare(b.startTime);
            }

            if (!(a.startTime || b.startTime)) {
              return 0;
            }

            return !a.startTime ? -1 : 0;
          }),
        }))
        .sort((a, b) => a.title.localeCompare(b.title)),
    [fields],
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
          disabled={loading || (disableClean && !isDirty)}
          onPress={handleSubmit(onSubmit)}
        />
      </Appbar>
      <Divider />
      {loading && <ProgressBar visible={loading} />}
      <SectionList
        sections={sections}
        contentContainerStyle={styles.contentContainer}
        renderItem={renderItem}
        stickyHeaderHiddenOnScroll
        stickySectionHeadersEnabled
        keyboardShouldPersistTaps="always"
        renderSectionHeader={({section}) => (
          <DateHeader title={section.title} />
        )}
        ListHeaderComponent={
          <Controller
            control={control}
            name="title"
            render={({field: {value, onBlur, onChange}}) => (
              <>
                <TextInput
                  label="Title"
                  theme={{
                    roundness: 0,
                  }}
                  autoFocus={autoFocus}
                  placeholder="Example: Class Lectures"
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
        ListEmptyComponent={<EmptyState title="Add events" />}
        ItemSeparatorComponent={Divider}
        SectionSeparatorComponent={Divider}
      />
      <FAB icon="edit-2" style={styles.fab} onPress={toggleAddEventForm} />
      <EventFormModal
        autoFocus
        visible={addEventModalVisible}
        onDismiss={toggleAddEventForm}
        onSubmit={addEvent}
      />
      <EventFormModal
        visible={!!editEvent}
        defaultValues={editEvent}
        onDismiss={hideEditModal}
        onSubmit={updateEvent}
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
