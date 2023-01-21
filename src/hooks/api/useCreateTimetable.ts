import {useMutation} from '@apollo/client';
import {useCallback} from 'react';
import {useToast} from '~components/Toast';
import createTimetable from '~graphql/queries/createTimetable';
import {EditTimetableInput} from '~graphql/__generated__/graphql';

export default function useCreateTimetable() {
  const [mutate, {loading, data, error}] = useMutation(createTimetable);
  const toast = useToast();

  const handleCreateTimetable = useCallback(
    (input: EditTimetableInput) =>
      mutate({
        variables: {
          input,
        },
        onError: e => toast.show(e.message),
      }),
    [mutate],
  );

  return {
    loading,
    error,
    timetable: data?.createTimetable,
    handleCreateTimetable,
  };
}
