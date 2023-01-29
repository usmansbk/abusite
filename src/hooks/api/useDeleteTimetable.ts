import {Reference, useMutation} from '@apollo/client';
import {useCallback} from 'react';
import {useToast} from '~components/Toast';
import deleteTimetable from '~graphql/queries/deleteTimetable';
import {DeleteTimetableMutationVariables} from '~graphql/__generated__/graphql';
import useMe from './useMe';

export default function useDeleteTimetable() {
  const toast = useToast();
  const {me} = useMe();
  const [mutate, {loading, data, error}] = useMutation(deleteTimetable, {
    onError: e => toast.show(e.message),
  });

  const handleDelete = useCallback(
    (id: DeleteTimetableMutationVariables['deleteTimetableId']) =>
      mutate({
        variables: {
          deleteTimetableId: id,
        },
        update(cache, {data}) {
          if (data?.deleteTimetable) {
            cache.modify({
              id: cache.identify(me!),
              fields: {
                timetables(existingRefs: Reference[], {readField}) {
                  return existingRefs.filter(
                    ref => readField('id', ref) !== data.deleteTimetable.id,
                  );
                },
              },
            });
          }
        },
      }),
    [mutate, me],
  );

  return {
    loading,
    error,
    handleDelete,
    timetable: data?.deleteTimetable,
  };
}
