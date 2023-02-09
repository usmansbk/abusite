import {useMutation} from '@apollo/client';
import {useCallback} from 'react';
import updateEvent from '~graphql/queries/updateEvent';
import {EditEventInput} from '~graphql/__generated__/graphql';

export default function useUpdateEvent() {
  const [mutate, {loading, data, error}] = useMutation(updateEvent);

  const handleUpdateEvent = useCallback(
    (input: EditEventInput) =>
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
    handleUpdateEvent,
    event: data?.updateEvent,
  };
}
