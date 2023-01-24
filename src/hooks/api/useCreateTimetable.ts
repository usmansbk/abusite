import {gql, Reference, useMutation} from '@apollo/client';
import {useCallback} from 'react';
import {useToast} from '~components/Toast';
import createTimetable from '~graphql/queries/createTimetable';
import {EditTimetableInput, Timetable} from '~graphql/__generated__/graphql';

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
        update(cache, {data}) {
          if (data) {
            const {createTimetable: newTimetable} = data;

            cache.modify({
              id: cache.identify(newTimetable.owner),
              fields: {
                timetables(existingRefs: Reference[], {readField}) {
                  const newTimetableRef = cache.writeFragment({
                    data: newTimetable,
                    fragment: gql`
                      fragment NewTimetableId on Timetable {
                        id
                      }
                    `,
                  }) as unknown as Timetable;

                  // Quick safety check - if the new timetable is already
                  // present in the cache, we don't need to add it again.
                  if (
                    existingRefs?.some(
                      (ref: Reference) =>
                        readField('id', ref) === newTimetableRef.id,
                    )
                  ) {
                    return existingRefs;
                  }

                  return [...existingRefs, newTimetableRef];
                },
              },
            });
          }
        },
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
