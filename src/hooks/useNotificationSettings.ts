import {useQuery} from '@apollo/client';
import {useCallback} from 'react';
import notificationSettings from '~graphql/localState/notificationSettings';

type Result = {
  muteNotifications: boolean;
};

export default function useNotificationSettings() {
  const {data, client} = useQuery<Result>(notificationSettings);

  const toggle = useCallback(
    (key: keyof Result) => {
      client.writeQuery({
        query: notificationSettings,
        data: {
          ...data,
          [key]: !data?.[key],
        },
      });
    },
    [client, data],
  );

  return {
    mute: data!.muteNotifications,
    toggle,
  };
}
