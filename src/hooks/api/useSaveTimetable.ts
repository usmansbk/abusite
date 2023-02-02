import {Reference, useMutation, gql} from '@apollo/client';
import {useCallback} from 'react';
import {useToast} from '~components/Toast';
import saveTimetable from '~graphql/queries/saveTimetable';
import {Timetable} from '~graphql/__generated__/graphql';
import useMe from './useMe';

export default function useSaveTimetable(timetable: Timetable) {
  const toast = useToast();
  const {me} = useMe();
  const [mutate, {loading, data, error}] = useMutation(saveTimetable, {
    onError: e => toast.show(e.message),
  });

  const handleSave = useCallback(
    () =>
      mutate({
        variables: {
          id: timetable.id,
        },
        optimisticResponse: {
          saveTimetable: {...timetable, isSaved: true},
        },
        update(cache, {data}) {
          if (data) {
            const {saveTimetable: savedTimetable} = data;

            cache.modify({
              id: cache.identify(me!),
              fields: {
                timetables(existingRefs: Reference[], {readField}) {
                  const savedTimetableRef = cache.writeFragment({
                    data: savedTimetable,
                    fragment: gql`
                      fragment SavedTimetableId on Timetable {
                        id
                      }
                    `,
                  }) as unknown as Timetable;

                  // Quick safety check - if the new timetable is already
                  // present in the cache, we don't need to add it again.
                  if (
                    existingRefs?.some(
                      (ref: Reference) =>
                        readField('id', ref) === savedTimetableRef.id,
                    )
                  ) {
                    return existingRefs;
                  }

                  return [...existingRefs, savedTimetableRef];
                },
              },
            });
          }
        },
      }),
    [mutate, timetable, me],
  );

  return {
    handleSave,
    loading,
    error,
    timetable: data?.saveTimetable,
  };
}
