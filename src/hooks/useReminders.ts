import {useQuery} from '@apollo/client';
import {useCallback} from 'react';
import reminders from '~graphql/localState/reminders';
import {DefaultReminders} from '~types';

type Result = {
  reminders: {[key: string]: DefaultReminders};
};

export default function useReminders() {
  const {data, client} = useQuery<Result>(reminders);

  const setReminders = useCallback(
    (id: string, values: DefaultReminders) => {
      client.writeQuery<Result>({
        query: reminders,
        data: {
          reminders: {
            ...data?.reminders,
            [id]: values,
          },
        },
      });
    },
    [data],
  );

  return {
    reminders: data!.reminders,
    setReminders,
  };
}
