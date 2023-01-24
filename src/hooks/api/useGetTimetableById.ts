import {useQuery} from '@apollo/client';
import {useToast} from '~components/Toast';
import getTimetableById from '~graphql/queries/getTimetableById';
import {GetTimetableByIdQueryVariables} from '~graphql/__generated__/graphql';

export default function useGetTimetableById(
  id: GetTimetableByIdQueryVariables['getTimetableByIdId'],
) {
  const toast = useToast();
  const {loading, data, error, refetch} = useQuery(getTimetableById, {
    variables: {
      getTimetableByIdId: id,
    },
    fetchPolicy: 'cache-first',
    onError: e => toast.show(e.message),
  });

  return {
    loading,
    error,
    refetch,
    timetable: data?.getTimetableById,
  };
}
