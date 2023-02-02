import {useMutation} from '@apollo/client';
import {useCallback} from 'react';
import {useToast} from '~components/Toast';
import unsaveTimetable from '~graphql/queries/unsaveTimetable';
import {Timetable} from '~graphql/__generated__/graphql';

export default function useUnsaveTimetable(timetable: Timetable) {
  const toast = useToast();
  const [mutate, {loading, data, error}] = useMutation(unsaveTimetable, {
    onError: e => toast.show(e.message),
  });

  const handleUnsave = useCallback(
    () =>
      mutate({
        variables: {
          id: timetable.id,
        },
      }),
    [mutate, timetable],
  );

  return {
    handleUnsave,
    loading,
    error,
    timetable: data?.unsaveTimetable,
  };
}
