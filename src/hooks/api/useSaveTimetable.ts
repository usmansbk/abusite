import {useMutation} from '@apollo/client';
import {useCallback} from 'react';
import saveTimetable from '~graphql/queries/saveTimetable';
import {SaveTimetableMutationVariables} from '~graphql/__generated__/graphql';

export default function useSaveTimetable() {
  const [mutate, {loading, data, error}] = useMutation(saveTimetable);

  const handleSave = useCallback(
    ({id}: SaveTimetableMutationVariables) =>
      mutate({
        variables: {
          id,
        },
      }),
    [mutate],
  );

  return {
    handleSave,
    loading,
    error,
    timetable: data?.saveTimetable,
  };
}
