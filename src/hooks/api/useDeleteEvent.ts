import {Reference, useMutation} from '@apollo/client';
import {useCallback} from 'react';
import deleteEvent from '~graphql/queries/deleteEvent';
import {Event} from '~graphql/__generated__/graphql';

export default function useDeleteEvent() {
  const [mutate, {loading, data, error}] = useMutation(deleteEvent);

  const handleDelete = useCallback(
    (event: Event) =>
      mutate({
        variables: {
          deleteEventId: event.id,
        },
        update(cache, {data}) {
          if (data?.deleteEvent) {
            if (event.timetable) {
              cache.modify({
                id: cache.identify(event.timetable),
                fields: {
                  events(existingRefs: Reference[], {readField}) {
                    return existingRefs.filter(
                      ref => readField('id', ref) !== data.deleteEvent.id,
                    );
                  },
                },
              });
            } else {
              cache.modify({
                id: cache.identify(event.owner),
                fields: {
                  unlistedEvents(existingRefs: Reference[], {readField}) {
                    return existingRefs.filter(
                      ref => readField('id', ref) !== data.deleteEvent.id,
                    );
                  },
                },
              });
            }
          }
        },
      }),
    [mutate],
  );

  return {
    loading,
    error,
    handleDelete,
    event: data?.deleteEvent,
  };
}
