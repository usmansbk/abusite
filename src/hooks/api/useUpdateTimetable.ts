import {useMutation} from '@apollo/client';
import {useCallback} from 'react';
import {useToast} from '~components/Toast';
import updateTimetable from '~graphql/queries/updateTimetable';
import {EditTimetableInput} from '~graphql/__generated__/graphql';

export default function useUpdateTimetable() {
  const toast = useToast();
  const [mutate, {loading, data, error}] = useMutation(updateTimetable, {
    onError: e => toast.show(e.message),
  });

  const handleUpdateTimetable = useCallback(
    (input: EditTimetableInput) =>
      mutate({
        variables: {
          input,
        },
      }),
    [mutate],
  );

  return {
    loading,
    error,
    handleUpdateTimetable,
    timetable: data?.updateTimetable,
  };
}
