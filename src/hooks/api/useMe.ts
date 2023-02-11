import {useQuery} from '@apollo/client';
import {useCallback} from 'react';
import {useToast} from '~components/Toast';
import getMe from '~graphql/queries/getMe';

export default function useMe() {
  const toast = useToast();
  const {loading, data, error, refetch} = useQuery(getMe, {
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-only',
    onError: e => {
      toast.show(e.message);
    },
  });

  const onRefresh = useCallback(() => refetch(), [refetch]);

  return {
    loading,
    error,
    onRefresh,
    me: data?.me,
  };
}
