import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {
  Appbar,
  Divider,
  List,
  Menu,
  ProgressBar,
  Text,
} from 'react-native-paper';
import Container from '~components/Container';
import NewEventDialog from '~components/NewEventDialog';
import {EditEventInput} from '~graphql/__generated__/graphql';
import useGetEventById from '~hooks/api/useGetEventById';
import {RootStackScreenProps} from '~types';
import {formatFullDate} from '~utils/dateTime';
import {formatEventTime} from '~utils/event';
import DeleteDialog from './DeleteDialog';
import EditEvent from './EditEvent';
import styles from './styles';

export default function Event({
  route,
  navigation,
}: RootStackScreenProps<'Event'>) {
  const {id} = route.params;

  const {loading, error, event} = useGetEventById(id);
  const [menuVisible, setMenuVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [duplicateVisible, setDuplicateVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);

  const openMenu = useCallback(() => setMenuVisible(true), []);
  const closeMenu = useCallback(() => setMenuVisible(false), []);
  const openDelete = useCallback(() => setDeleteVisible(true), []);
  const closeDelete = useCallback(() => setDeleteVisible(false), []);
  const openDuplicate = useCallback(() => setDuplicateVisible(true), []);
  const closeDuplicate = useCallback(() => setDuplicateVisible(false), []);
  const openEdit = useCallback(() => setEditVisible(true), []);
  const closeEdit = useCallback(() => setEditVisible(false), []);

  useEffect(() => {
    if (error) {
      navigation.popToTop();
    }
  }, [error]);

  const menuItems = useMemo(
    () => [
      {
        icon: 'edit',
        title: 'Edit',
        onPress: openEdit,
      },
      {
        icon: 'copy',
        title: 'Duplicate',
        onPress: openDuplicate,
      },
      {
        icon: 'trash',
        title: 'Delete',
        onPress: openDelete,
      },
      {
        icon: 'slash',
        title: 'Cancel',
        onPress: () => null,
      },
    ],
    [],
  );

  const defaultValues = useMemo(
    () => ({...event, timetableId: event?.timetable?.id} as EditEventInput),
    [event],
  );

  if (loading) {
    return <ProgressBar indeterminate />;
  }

  if (error) {
    return null;
  }

  const {
    title,
    startTime,
    endTime,
    startDate,
    repeat,
    timetable,
    owner,
    description,
    isOwner,
  } = event!;
  const time = formatEventTime(startTime, endTime);

  return (
    <Container>
      <Appbar>
        <Appbar.Action icon="x" onPress={navigation.goBack} />
        <Appbar.Content title="" />
        {isOwner && (
          <Menu
            visible={menuVisible}
            onDismiss={closeMenu}
            anchor={<Appbar.Action icon="more-vertical" onPress={openMenu} />}>
            {menuItems.map(({icon, onPress, title}) => (
              <Menu.Item
                key={title}
                title={title}
                leadingIcon={icon}
                onPress={() => {
                  closeMenu();
                  onPress();
                }}
              />
            ))}
          </Menu>
        )}
      </Appbar>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
          <Text variant="displayMedium">{title}</Text>
          <Text variant="titleLarge">{formatFullDate(startDate)}</Text>
          {!!time && <Text variant="labelLarge">{time}</Text>}
          {!!repeat && <Text variant="labelSmall">{repeat}</Text>}
        </View>
        <Divider />
        <List.Item
          titleStyle={styles.title}
          title="Organizer"
          description={owner.fullName}
        />
        <Divider />
        {!!timetable && (
          <>
            <List.Item
              titleStyle={styles.title}
              title="Timetable"
              description={timetable.title}
              onPress={() =>
                navigation.navigate('Timetable', {
                  id: timetable.id,
                })
              }
            />
            <Divider />
          </>
        )}
        <View style={styles.footer}>
          {!!description && <Text>{description}</Text>}
        </View>
      </ScrollView>
      {isOwner && (
        <>
          <DeleteDialog visible={deleteVisible} onDismiss={closeDelete} />
          <NewEventDialog
            autoFocus={false}
            visible={duplicateVisible}
            onDismiss={closeDuplicate}
            defaultValues={defaultValues}
            onSuccess={navigation.popToTop}
          />
          <EditEvent
            event={defaultValues}
            visible={editVisible}
            onDismiss={closeEdit}
          />
        </>
      )}
    </Container>
  );
}
