import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Platform, Share} from 'react-native';
import {Appbar, Menu, ProgressBar} from 'react-native-paper';
import ConfirmDialog from '~components/ConfirmDialog';
import Container from '~components/Container';
import SaveTimetableButton from '~components/SaveTimetableButton';
import TimetableCalendar from '~components/TimetableCalendar';
import env from '~config/env';
import {Event, Timetable as TimetableI} from '~graphql/__generated__/graphql';
import useDeleteTimetable from '~hooks/api/useDeleteTimetable';
import useGetTimetableById from '~hooks/api/useGetTimetableById';
import {RootStackScreenProps} from '~types';
import InfoDialog from './InfoDialog';

export default function Timetable({
  navigation,
  route,
}: RootStackScreenProps<'Timetable'>) {
  const {id} = route.params;
  const {loading, error, timetable} = useGetTimetableById(id);
  const {
    loading: isDeleting,
    handleDelete,
    timetable: deletedTimetable,
  } = useDeleteTimetable();
  const [menuVisible, setMenuVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);

  const openMenu = useCallback(() => setMenuVisible(true), []);
  const openInfo = useCallback(() => setInfoVisible(true), []);
  const closeMenu = useCallback(() => setMenuVisible(false), []);
  const closeDeleteDialog = useCallback(() => setDeleteVisible(false), []);
  const closeInfoDialog = useCallback(() => setInfoVisible(false), []);

  useEffect(() => {
    if (deletedTimetable) {
      navigation.pop();
    }
  }, [deletedTimetable]);

  const menuItems = useMemo(
    () => [
      {
        icon: 'edit',
        title: 'Edit',
        onPress: () =>
          navigation.navigate('EditTimetable', {
            id,
          }),
      },
      {
        icon: 'copy',
        title: 'Duplicate',
        onPress: () =>
          navigation.navigate('DuplicateTimetable', {
            id,
          }),
      },
      {
        icon: 'trash',
        title: 'Delete',
        onPress: () => setDeleteVisible(true),
      },
    ],
    [navigation],
  );

  const share = useCallback(() => {
    if (timetable) {
      const url = `${env.universalLink}/timetable/${timetable.id}`;
      const message =
        Platform.OS === 'ios' ? timetable.title : `${timetable.title}\n${url}`;

      Share.share(
        {
          title: timetable.title,
          message,
          url,
        },
        {dialogTitle: timetable.title, subject: timetable.title},
      );
    }
  }, [timetable]);

  useEffect(() => {
    if (error) {
      navigation.pop();
    }
  }, [error]);

  if (loading) {
    return <ProgressBar />;
  }

  if (error) {
    return null;
  }

  const {title, isOwner, events} = timetable!;

  return (
    <Container>
      <Appbar>
        <Appbar.Action icon="arrow-left" onPress={navigation.goBack} />
        <Appbar.Content title={title} onPress={openInfo} />
        {!isOwner && (
          <SaveTimetableButton timetable={timetable as TimetableI} />
        )}
        <Appbar.Action icon="share-2" onPress={share} />
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
      {isDeleting && <ProgressBar visible />}
      <TimetableCalendar events={events as Event[]} />
      <ConfirmDialog
        visible={deleteVisible}
        onDismiss={closeDeleteDialog}
        title="Delete this timetable?"
        onConfirm={() => handleDelete(id)}
      />
      <InfoDialog
        visible={infoVisible}
        onDismiss={closeInfoDialog}
        timetable={timetable as TimetableI}
      />
    </Container>
  );
}
