import React, {useCallback, useState} from 'react';
import {Platform, ScrollView} from 'react-native';
import {useTheme, Appbar, List, Switch} from 'react-native-paper';
import notifee from '@notifee/react-native';
import Container from '~components/Container';
import useNotificationSettings from '~hooks/useNotificationSettings';
import {RootStackScreenProps} from '~types';
import DefaultReminder from './DefaultReminder';
import ThemeDialog from './ThemeDialog';

export default function Settings({
  navigation,
}: RootStackScreenProps<'Settings'>) {
  const {dark} = useTheme();
  const [themeDialogVisible, setOpenTheme] = useState(false);
  const [reminderVisible, setReminderVisible] = useState(false);
  const {mute, toggle} = useNotificationSettings();

  const closeThemeDialog = useCallback(() => {
    setOpenTheme(false);
  }, []);

  const closeReminderDialog = useCallback(() => {
    setReminderVisible(false);
  }, []);

  return (
    <Container>
      <Appbar>
        <Appbar.Action icon="arrow-left" onPress={navigation.goBack} />
        <Appbar.Content title="Settings" />
        <Appbar.Action
          icon={dark ? 'moon' : 'sun'}
          onPress={() => setOpenTheme(true)}
        />
      </Appbar>
      <ScrollView>
        <List.Section title="Notifications">
          <List.Item
            title="Mute"
            right={() => (
              <Switch
                onChange={() => toggle('muteNotifications')}
                value={mute}
              />
            )}
          />
          <List.Item
            disabled={mute}
            title="Default reminders"
            onPress={() => setReminderVisible(true)}
            right={props => <List.Icon icon="chevron-right" {...props} />}
          />
          {Platform.OS === 'android' && (
            <>
              <List.Item
                title="Sound and Vibration"
                onPress={() => notifee.openNotificationSettings('default')}
                right={props => <List.Icon icon="chevron-right" {...props} />}
              />
              <List.Item
                title="Alarm settings"
                onPress={notifee.openAlarmPermissionSettings}
                right={props => <List.Icon icon="chevron-right" {...props} />}
              />
            </>
          )}
        </List.Section>
      </ScrollView>
      <ThemeDialog visible={themeDialogVisible} onDismiss={closeThemeDialog} />
      <DefaultReminder
        visible={reminderVisible}
        onDismiss={closeReminderDialog}
      />
    </Container>
  );
}
