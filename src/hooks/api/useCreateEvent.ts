import {Reference, useMutation, gql} from '@apollo/client';
import {ModifierDetails} from '@apollo/client/cache';
import {useCallback} from 'react';
import {useToast} from '~components/Toast';
import createEvent from '~graphql/queries/createEvent';
import {EditEventInput, Event} from '~graphql/__generated__/graphql';

export default function useCreateEvent() {
  const toast = useToast();
  const [mutate, {loading, data, error}] = useMutation(createEvent, {
    onError: e => toast.show(e.message),
  });

  const handleCreateEvent = useCallback(
    (input: EditEventInput) =>
      mutate({
        variables: {
          input,
        },
        update(cache, {data}) {
          if (data?.createEvent) {
            const {createEvent: newEvent} = data;

            const updateEvents = (
              existingRefs: Reference[],
              {readField}: ModifierDetails,
            ) => {
              const newEventRef = cache.writeFragment({
                data: createEvent,
                fragment: gql`
                  fragment NewEvent on Event {
                    id
                  }
                `,
              }) as unknown as Event;

              // Quick safety check - if the new event is already
              // present in the cache, we don't need to add it again.
              if (
                existingRefs?.some(
                  (ref: Reference) => readField('id', ref) === newEvent.id,
                )
              ) {
                return existingRefs;
              }

              return [...existingRefs, newEventRef];
            };

            if (newEvent.timetable) {
              cache.modify({
                id: cache.identify(newEvent.timetable),
                fields: {
                  events: updateEvents,
                },
              });
            } else {
              cache.modify({
                id: cache.identify(newEvent.owner),
                fields: {
                  unlistedEvents: updateEvents,
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
    event: data?.createEvent,
    error,
    handleCreateEvent,
  };
}
