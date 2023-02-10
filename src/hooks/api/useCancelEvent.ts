import {useMutation} from '@apollo/client';
import {useCallback} from 'react';
import cancelEvent from '~graphql/queries/cancelEvent';
import {CancelEventMutationVariables} from '~graphql/__generated__/graphql';

export default function useCancelEvent() {
  const [mutate, {loading, data, error}] = useMutation(cancelEvent);

  const handleCancelEvent = useCallback(
    (variables: CancelEventMutationVariables) =>
      mutate({
        variables,
      }),
    [mutate],
  );

  return {
    loading,
    error,
    handleCancelEvent,
    event: data?.cancelEvent,
  };
}
