import {useApolloClient} from '@apollo/client';
import {useCallback} from 'react';
import {persistor} from '~graphql/cache';
import authState from '~graphql/localState/authState';

export default function useLogout() {
  const client = useApolloClient();

  const logout = useCallback(async () => {
    client.writeQuery<{token: null}>({
      query: authState,
      data: {
        token: null,
      },
    });
    await persistor.purge();
    await client.clearStore();
  }, [client]);

  return logout;
}
