import {useMutation} from '@apollo/client';
import {useCallback} from 'react';
import unsaveTimetable from '~graphql/queries/unsaveTimetable';
import {UnsaveTimetableMutationVariables} from '~graphql/__generated__/graphql';

export default function useUnsaveTimetable() {
  const [mutate, {loading, data, error}] = useMutation(unsaveTimetable);

  const handleUnsave = useCallback(
    ({id}: UnsaveTimetableMutationVariables) =>
      mutate({
        variables: {
          id,
        },
      }),
    [mutate],
  );

  return {
    handleUnsave,
    loading,
    error,
    timetable: data?.unsaveTimetable,
  };
}
