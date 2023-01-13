import {useQuery} from '@apollo/client';
import getMe from '~graphql/queries/getMe';

export default function useMe() {
  const {loading, data, error, refetch} = useQuery(getMe, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
  });

  return {
    loading,
    error,
    me: data?.me,
    refetch,
  };
}
