import {useMutation} from '@apollo/client';
import {useCallback} from 'react';
import {useToast} from '~components/Toast';
import createEvent from '~graphql/queries/createEvent';
import {EditEventInput} from '~graphql/__generated__/graphql';

export default function useCreateEvent() {
  const [mutate, {loading, data, error}] = useMutation(createEvent);
  const toast = useToast();

  const handleCreateEvent = useCallback(
    (input: EditEventInput) =>
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
    event: data?.createEvent,
    error,
    handleCreateEvent,
  };
}
