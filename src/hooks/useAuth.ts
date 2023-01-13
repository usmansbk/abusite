import {useQuery} from '@apollo/client';
import authState from '~graphql/localState/authState';

export default function useAuth() {
  const {data} = useQuery<{token: string}>(authState);

  return {
    isLoggedIn: !!data?.token,
  };
}
