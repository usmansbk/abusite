import React, {useCallback, useMemo, useState} from 'react';
import {ScrollView} from 'react-native';
import {Appbar, Menu, ProgressBar, Text} from 'react-native-paper';
import ConfirmDialog from '~components/ConfirmDialog';
import Container from '~components/Container';
import EmptyState from '~components/EmptyState';
import useGetTimetableById from '~hooks/api/useGetTimetableById';
import {RootStackScreenProps} from '~types';
import styles from './styles';

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
        <Appbar.Content title="" />
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
      <ScrollView style={styles.contentContainer}>
        <Text variant="headlineLarge">{title}</Text>
      </ScrollView>
      <ConfirmDialog
        visible={deleteVisible}
        onDismiss={() => setDeleteVisible(false)}
        title="Delete this timetable?"
        onConfirm={console.log}
      />
    </Container>
  );
}
