import React, {useCallback, useState} from 'react';
import {ScrollView} from 'react-native';
import {useTheme, Appbar, List, Checkbox} from 'react-native-paper';
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
  const {enableSound, enableVibration, toggle} = useNotificationSettings();

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
          <Checkbox.Item
            status={enableSound ? 'checked' : 'unchecked'}
            onPress={() => toggle('enableSound')}
            label="Sound"
          />
          <Checkbox.Item
            status={enableVibration ? 'checked' : 'unchecked'}
            onPress={() => toggle('enableVibration')}
            label="Vibration"
          />
          <List.Item
            title="Default reminders"
            onPress={() => setReminderVisible(true)}
            right={props => <List.Icon icon="chevron-right" {...props} />}
          />
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
