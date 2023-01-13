import {useQuery} from '@apollo/client';
import authState from '~graphql/localState/authState';

export default function useAuth() {
  const {data} = useQuery(authState, {fetchPolicy: 'cache-only'});

  return {
    isLoggedIn: !!data?.token,
  };
}
