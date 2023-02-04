import React from 'react';
import {Dialog, Portal, RadioButton} from 'react-native-paper';
import {DefaultReminders} from '~types';

interface Props {
  visible: boolean;
  onDismiss: () => void;
  values: DefaultReminders;
  onChange: (key: keyof DefaultReminders) => void;
}

const options = [
  {
    label: '5 minutes before',
    value: 5,
    key: '5m',
  },
  {
    label: '10 minutes before',
    value: 10,
    key: '10m',
  },
  {
    label: '15 minutes before',
    value: 15,
    key: '15m',
  },
  {
    label: '30 minutes before',
    value: 30,
    key: '30m',
  },
  {
    label: '45 minutes before',
    value: 45,
    key: '45m',
  },
  {
    label: '1 hour before',
    value: 60,
    key: '60m',
  },
];

export default function ReminderDialog({
  visible,
  onDismiss,
  values,
  onChange,
}: Props) {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Title>Reminder</Dialog.Title>
        <Dialog.Content>
          {options.map(({label, value, key}) => (
            <RadioButton.Item
              key={value}
              label={label}
              value={
                values[key as keyof DefaultReminders] ? 'checked' : 'unchecked'
              }
              onPress={() => onChange(key as keyof DefaultReminders)}
            />
          ))}
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
}
