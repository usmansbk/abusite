import React, {useCallback, useMemo, useState} from 'react';
import {Appbar, Menu, ProgressBar} from 'react-native-paper';
import Container from '~components/Container';
import EmptyState from '~components/EmptyState';
import {Timetable as TimetableI} from '~graphql/__generated__/graphql';
import useGetTimetableById from '~hooks/api/useGetTimetableById';
import {RootStackScreenProps} from '~types';
import DeleteDialog from './DeleteDialog';
import InfoDialog from './InfoDialog';

export default function Timetable({
  navigation,
  route,
}: RootStackScreenProps<'Timetable'>) {
  const {id} = route.params;
  const {loading, error, timetable} = useGetTimetableById(id);
  const [menuVisible, setMenuVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);

  const openMenu = useCallback(() => setMenuVisible(true), []);
  const openInfo = useCallback(() => setInfoVisible(true), []);
  const closeMenu = useCallback(() => setMenuVisible(false), []);
  const closeDeleteDialog = useCallback(() => setDeleteVisible(false), []);
  const closeInfoDialog = useCallback(() => setInfoVisible(false), []);

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

  if (loading) {
    return <ProgressBar />;
  }

  if (error) {
    return <EmptyState title="Something went wrong..." />;
  }

  const {title} = timetable!;

  return (
    <Container>
      <Appbar>
        <Appbar.Action icon="arrow-left" onPress={navigation.goBack} />
        <Appbar.Content title={title} onPress={openInfo} />
        <Appbar.Action icon="bookmark" onPress={() => null} />
        <Appbar.Action icon="share-2" onPress={() => null} />
        <Menu
          visible={menuVisible}
          onDismiss={closeMenu}
          anchor={<Appbar.Action icon="more-horizontal" onPress={openMenu} />}>
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
      </Appbar>
      <DeleteDialog
        id={id}
        visible={deleteVisible}
        onDismiss={closeDeleteDialog}
      />
      <InfoDialog
        visible={infoVisible}
        onDismiss={closeInfoDialog}
        timetable={timetable as TimetableI}
      />
    </Container>
  );
}
