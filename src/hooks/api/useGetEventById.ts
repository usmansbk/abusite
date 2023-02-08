import {useQuery} from '@apollo/client';
import {useToast} from '~components/Toast';
import getEventById from '~graphql/queries/getEventById';
import {GetEventByIdQueryVariables} from '~graphql/__generated__/graphql';

export default function useGetEventById(
  id: GetEventByIdQueryVariables['getEventByIdId'],
) {
  const toast = useToast();
  const {loading, data, error, refetch} = useQuery(getEventById, {
    variables: {
      getEventByIdId: id,
    },
    fetchPolicy: 'cache-first',
    onError: e => toast.show(e.message),
  });

  return {
    loading,
    error,
    refetch,
    event: data?.getEventById,
  };
}
