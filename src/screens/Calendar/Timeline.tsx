import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Banner, FAB, Portal, ProgressBar, Appbar} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useDrawerStatus} from '@react-navigation/drawer';
import TimetableCalendar from '~components/TimetableCalendar';
import useMe from '~hooks/api/useMe';
import scheduleReminders from '~utils/notifications';
import {Event} from '~graphql/__generated__/graphql';
import useNotificationSettings from '~hooks/useNotificationSettings';
import useDefaultReminders from '~hooks/useDefaultReminders';
import useReminders from '~hooks/useReminders';
import useIsOptimizationEnabled from '~hooks/useIsOptimizationEnabled';
import NewEventDialog from '~components/NewEventDialog';
import styles from './styles';

interface Props {
  onPressMenu: () => void;
}

export default function Timeline({onPressMenu}: Props) {
  const isFocused = useIsFocused();
  const {t} = useTranslation();
  const drawerStatus = useDrawerStatus();
  const navigation = useNavigation();
  const {loading, me, onRefresh} = useMe();
  const [open, setOpen] = useState(false);
  const [eventFormVisible, setEventFormVisible] = useState(false);
  const {mute} = useNotificationSettings();
  const {defaultReminders} = useDefaultReminders();
  const {reminders} = useReminders();
  const {isBatteryOptimizationEnabled, openBatterySettings} =
    useIsOptimizationEnabled();

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
        icon: 'layout',
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

  const events = useMemo(
    () =>
      me?.timetables
        .flatMap(timetable => timetable!.events as Event[])
        .concat(me.unlistedEvents as Event[]) || [],
    [me?.timetables, me?.unlistedEvents],
  );

  useEffect(() => {
    scheduleReminders(events, {
      defaultReminders,
      mute,
      reminders,
    });
  }, [events, mute, defaultReminders, reminders]);

  return (
    <>
      <Appbar>
        <Appbar.Action icon="menu" onPress={onPressMenu} />
        <Appbar.Content title="" />
        <Appbar.Action icon="refresh-cw" onPress={onRefresh} />
      </Appbar>
      <Banner
        visible={isBatteryOptimizationEnabled}
        actions={[
          {
            label: 'Fix it',
            onPress: openBatterySettings,
          },
        ]}>
        To ensure notifications are delivered, please disable battery
        optimization for the app.
      </Banner>
      {loading && <ProgressBar indeterminate />}
      <TimetableCalendar events={events} />
      {isFocused && !eventFormVisible && (
        <Portal>
          <FAB.Group
            visible={drawerStatus === 'closed'}
            open={open}
            icon={open ? 'calendar' : 'plus'}
            style={styles.fab}
            onStateChange={onStateChange}
            onPress={handlePress}
            actions={actions}
          />
        </Portal>
      )}
      <NewEventDialog
        visible={eventFormVisible}
        onDismiss={toggleEventFormVisible}
      />
    </>
  );
}
