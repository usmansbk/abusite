import React from 'react';
import ReminderDialog from '~components/ReminderDialog';

interface Props {
  visible: boolean;
  onDismiss: () => void;
}

export default function DefaultReminder({visible, onDismiss}: Props) {
  return <ReminderDialog visible={visible} onDismiss={onDismiss} />;
}
