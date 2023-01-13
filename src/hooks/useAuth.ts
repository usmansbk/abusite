import {useApolloClient} from '@apollo/client';
import authState from '~graphql/localState/authState';

export default function useAuth() {
  const client = useApolloClient();
  const data = client.readQuery({
    query: authState,
  });

  return {
    isLoggedIn: !!data?.token,
  };
}
