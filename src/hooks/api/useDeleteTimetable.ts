import {useMutation} from '@apollo/client';
import {useCallback} from 'react';
import {useToast} from '~components/Toast';
import deleteTimetable from '~graphql/queries/deleteTimetable';
import {DeleteTimetableMutationVariables} from '~graphql/__generated__/graphql';

export default function useDeleteTimetable() {
  const toast = useToast();
  const [mutate, {loading, data, error}] = useMutation(deleteTimetable, {
    onError: e => toast.show(e.message),
  });

  const handleDelete = useCallback(
    (id: DeleteTimetableMutationVariables['deleteTimetableId']) =>
      mutate({
        variables: {
          deleteTimetableId: id,
        },
      }),
    [mutate],
  );

  return {
    loading,
    error,
    handleDelete,
    timetable: data?.deleteTimetable,
  };
}
