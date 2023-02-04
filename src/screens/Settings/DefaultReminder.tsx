import React from 'react';
import ReminderDialog from '~components/ReminderDialog';
import useDefaultReminders from '~hooks/useDefaultReminders';

interface Props {
  visible: boolean;
  onDismiss: () => void;
}

export default function DefaultReminder({visible, onDismiss}: Props) {
  const {defaultReminders, onToggle} = useDefaultReminders();

  return (
    <ReminderDialog
      visible={visible}
      onDismiss={onDismiss}
      values={defaultReminders!}
      onChange={onToggle}
    />
  );
}
