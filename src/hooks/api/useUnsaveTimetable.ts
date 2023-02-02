import {Reference, useMutation} from '@apollo/client';
import {useCallback} from 'react';
import {useToast} from '~components/Toast';
import unsaveTimetable from '~graphql/queries/unsaveTimetable';
import {Timetable} from '~graphql/__generated__/graphql';
import useMe from './useMe';

export default function useUnsaveTimetable(timetable: Timetable) {
  const toast = useToast();
  const {me} = useMe();
  const [mutate, {loading, data, error}] = useMutation(unsaveTimetable, {
    onError: e => toast.show(e.message),
  });

  const handleUnsave = useCallback(
    () =>
      mutate({
        variables: {
          id: timetable.id,
        },
        optimisticResponse: {
          unsaveTimetable: {...timetable, isSaved: false},
        },
        update(cache, {data}) {
          if (data?.unsaveTimetable) {
            cache.modify({
              id: cache.identify(me!),
              fields: {
                timetables(existingRefs: Reference[], {readField}) {
                  return existingRefs.filter(
                    ref => readField('id', ref) !== data.unsaveTimetable.id,
                  );
                },
              },
            });
          }
        },
      }),
    [mutate, timetable, me],
  );

  return {
    handleUnsave,
    loading,
    error,
    timetable: data?.unsaveTimetable,
  };
}
