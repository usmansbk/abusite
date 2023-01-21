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
  Text,
  Surface,
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
import {formatCalendarDate} from '~utils/dateTime';
import styles from './styles';
import EventItem from './EventItem';

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

  const {fields, append, remove} = useFieldArray({
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

  const addEvent = useCallback(
    (event: EditEventInput) => {
      append(event);
      setAddEventFormVisible(false);
    },
    [append],
  );

  const removeEvent = useCallback(
    (event: EditEventInput & Record<'key', string>) => {
      const index = fields.findIndex(item => item.key === event.key);
      remove(index);
    },
    [fields, remove],
  );

  const renderItem: ListRenderItem<EditEventInput & Record<'key', string>> =
    useCallback(
      ({item}) => (
        <EventItem
          item={item}
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
          disabled={loading || !isDirty}
          onPress={handleSubmit(onSubmit)}
        />
      </Appbar>
      <Divider />
      {loading && <ProgressBar visible={loading} />}
      <SectionList
        sections={sections}
        contentContainerStyle={styles.contentContainer}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        stickyHeaderHiddenOnScroll
        stickySectionHeadersEnabled
        renderSectionHeader={({section}) => (
          <Surface style={styles.sectionHeader}>
            <Text variant="titleMedium">
              {formatCalendarDate(section.title)}
            </Text>
          </Surface>
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
          />
        }
        ItemSeparatorComponent={Divider}
      />
      <FAB icon="edit-2" style={styles.fab} onPress={toggleAddEventForm} />
      <EventFormModal
        autoFocus
        visible={addEventModalVisible}
        onDismiss={toggleAddEventForm}
        onSubmit={addEvent}
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
