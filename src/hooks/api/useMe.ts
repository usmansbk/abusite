import {useQuery} from '@apollo/client';
import {useToast} from '~components/Toast';
import getMe from '~graphql/queries/getMe';

export default function useMe() {
  const toast = useToast();
  const {loading, data, error, refetch} = useQuery(getMe, {
    fetchPolicy: 'cache-first',
    onError: e => {
      toast.show(e.message);
    },
  });

  return {
    loading,
    error,
    me: data?.me,
    refetch,
  };
}
