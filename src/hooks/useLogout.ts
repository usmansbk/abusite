import {useApolloClient} from '@apollo/client';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useCallback} from 'react';
import {persistor} from '~graphql/cache';
import authState from '~graphql/localState/authState';

export default function useLogout() {
  const client = useApolloClient();

  const logout = useCallback(async () => {
    persistor.pause();
    client.writeQuery<{token: null}>({
      query: authState,
      data: {
        token: null,
      },
    });
    await persistor.purge();
    client.cache.reset();
    await GoogleSignin.signOut();
    persistor.resume();
  }, [client]);

  return logout;
}
