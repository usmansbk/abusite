import React, {useCallback, useMemo} from 'react';
import ReminderDialog from '~components/ReminderDialog';
import useDefaultReminders from '~hooks/useDefaultReminders';
import useReminders from '~hooks/useReminders';
import {DefaultReminders} from '~types';

interface Props {
  id: string;
  visible: boolean;
  onDismiss: () => void;
}

export default function EventReminder({visible, onDismiss, id}: Props) {
  const {defaultReminders} = useDefaultReminders();
  const {reminders, setReminders} = useReminders();

  const values = useMemo(
    () => ({...defaultReminders, ...reminders[id]}),
    [reminders, defaultReminders, id],
  );

  const onChange = useCallback(
    (key: keyof DefaultReminders) => {
      setReminders(id, {
        ...values,
        [key]: !values[key],
      });
    },
    [values],
  );

  return (
    <ReminderDialog
      values={values}
      visible={visible}
      onDismiss={onDismiss}
      onChange={onChange}
    />
  );
}
