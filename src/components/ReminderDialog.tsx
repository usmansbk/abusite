import React from 'react';
import {Checkbox, Dialog, Portal} from 'react-native-paper';
import {DefaultReminders} from '~types';

interface Props {
  visible: boolean;
  onDismiss: () => void;
  values: DefaultReminders;
  onChange: (key: keyof DefaultReminders) => void;
}

type Option = {
  key: keyof DefaultReminders;
  label: string;
};

const options: Option[] = [
  {
    label: 'Exact time',
    key: '0',
  },
  {
    label: '5 minutes before',
    key: '5',
  },
  {
    label: '10 minutes before',
    key: '10',
  },
  {
    label: '15 minutes before',
    key: '15',
  },
  {
    label: '30 minutes before',
    key: '30',
  },
  {
    label: '45 minutes before',
    key: '45',
  },
  {
    label: '1 hour before',
    key: '60',
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
          {options.map(({label, key}) => (
            <Checkbox.Item
              key={key}
              label={label}
              status={
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
