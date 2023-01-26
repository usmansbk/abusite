import React, {useCallback, useMemo, useState} from 'react';
import {Appbar, Menu, ProgressBar} from 'react-native-paper';
import ConfirmDialog from '~components/ConfirmDialog';
import Container from '~components/Container';
import EmptyState from '~components/EmptyState';
import useGetTimetableById from '~hooks/api/useGetTimetableById';
import {RootStackScreenProps} from '~types';

export default function Timetable({
  navigation,
  route,
}: RootStackScreenProps<'Timetable'>) {
  const {id} = route.params;
  const {loading, error, timetable} = useGetTimetableById(id);
  const [menuVisible, setMenuVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);

  const openMenu = useCallback(() => setMenuVisible(true), []);
  const closeMenu = useCallback(() => setMenuVisible(false), []);

  const menuItems = useMemo(
    () => [
      {
        icon: 'info',
        title: 'Info',
        onPress: () => null,
      },
      {
        icon: 'share-2',
        title: 'Share',
        onPress: () => null,
      },
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
        <Appbar.Content onPress={() => console.log(title)} title={title} />
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
      </Appbar>
      <ConfirmDialog
        visible={deleteVisible}
        onDismiss={() => setDeleteVisible(false)}
        title="Delete this timetable?"
        onConfirm={console.log}
      />
    </Container>
  );
}
