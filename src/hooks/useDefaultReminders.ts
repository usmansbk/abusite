import {useQuery} from '@apollo/client';
import {useCallback} from 'react';
import defaultReminders from '~graphql/localState/defaultReminders';
import {DefaultReminders} from '~types';

export default function useDefaultReminders() {
  const {data, client} = useQuery<{defaultReminders: DefaultReminders}>(
    defaultReminders,
  );

  const onToggle = useCallback(
    (key: keyof DefaultReminders) => {
      client.writeQuery({
        query: defaultReminders,
        data: {
          defaultReminders: {
            ...data?.defaultReminders,
            [key]: !data?.defaultReminders[key],
          },
        },
      });
    },
    [client, data],
  );

  return {
    defaultReminders: data!.defaultReminders,
    onToggle,
  };
}
