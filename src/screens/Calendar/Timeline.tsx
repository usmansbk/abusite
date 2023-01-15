import React, {useCallback, useMemo, useState} from 'react';
import {FAB, Portal, ProgressBar} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useDrawerStatus} from '@react-navigation/drawer';
import TimetableCalendar from '~components/TimetableCalendar';
import EventFormModal from '~components/EventFormModal';
import useMe from '~hooks/api/useMe';
import styles from './styles';

export default function Timeline() {
  const isFocused = useIsFocused();
  const {t} = useTranslation();
  const drawerStatus = useDrawerStatus();
  const navigation = useNavigation();
  const {loading} = useMe();
  const [eventFormVisible, setEventFormVisible] = useState(false);

  const [open, setOpen] = useState(false);

  const toggleEventFormVisible = useCallback(
    () => setEventFormVisible(visible => !visible),
    [],
  );

  const onStateChange = useCallback((value: {open: boolean}) => {
    setOpen(value.open);
  }, []);

  const actions = useMemo(
    () => [
      {
        icon: 'list',
        label: t('buttons.timetable'),
        onPress: () => navigation.navigate('NewTimetable'),
      },
    ],
    [],
  );

  const handlePress = useCallback(() => {
    if (open) {
      toggleEventFormVisible();
    }
  }, [open]);

  return (
    <>
      {loading && <ProgressBar indeterminate />}
      <TimetableCalendar />
      {isFocused && (
        <Portal>
          <FAB.Group
            visible={drawerStatus === 'closed' && !eventFormVisible}
            open={open}
            icon={open ? 'edit-2' : 'plus'}
            style={styles.fab}
            onStateChange={onStateChange}
            onPress={handlePress}
            actions={actions}
          />
        </Portal>
      )}
      <EventFormModal
        autoFocus
        visible={eventFormVisible}
        onDismiss={toggleEventFormVisible}
        timetables={[]}
      />
    </>
  );
}
