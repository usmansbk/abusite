import React from 'react';
import ReminderDialog from '~components/ReminderDialog';
import useDefaultReminders from '~hooks/useDefaultReminders';

interface Props {
  visible: boolean;
  onDismiss: () => void;
}

export default function EventReminder({visible, onDismiss}: Props) {
  const {defaultReminders} = useDefaultReminders();
  return (
    <ReminderDialog
      values={defaultReminders}
      visible={visible}
      onDismiss={onDismiss}
      onChange={() => null}
    />
  );
}
