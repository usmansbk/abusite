import {useMutation} from '@apollo/client';
import {useCallback} from 'react';
import {useToast} from '~components/Toast';
import saveTimetable from '~graphql/queries/saveTimetable';
import {Timetable} from '~graphql/__generated__/graphql';

export default function useSaveTimetable(timetable: Timetable) {
  const toast = useToast();
  const [mutate, {loading, data, error}] = useMutation(saveTimetable, {
    onError: e => toast.show(e.message),
  });

  const handleSave = useCallback(
    () =>
      mutate({
        variables: {
          id: timetable.id,
        },
      }),
    [mutate, timetable],
  );

  return {
    handleSave,
    loading,
    error,
    timetable: data?.saveTimetable,
  };
}
