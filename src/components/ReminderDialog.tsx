import React from 'react';
import {Dialog, Portal, RadioButton} from 'react-native-paper';

interface Props {
  visible: boolean;
  onDismiss: () => void;
}

const options = [
  {
    label: '5 minutes before',
    value: 5,
  },
  {
    label: '10 minutes before',
    value: 10,
  },
  {
    label: '15 minutes before',
    value: 15,
  },
  {
    label: '30 minutes before',
    value: 30,
  },
  {
    label: '45 minutes before',
    value: 45,
  },
  {
    label: '1 hour before',
    value: 60,
  },
];

export default function ReminderDialog({visible, onDismiss}: Props) {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Title>Reminder</Dialog.Title>
        <Dialog.Content>
          {options.map(({label, value}) => (
            <RadioButton.Item key={value} label={label} value="checked" />
          ))}
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
}
