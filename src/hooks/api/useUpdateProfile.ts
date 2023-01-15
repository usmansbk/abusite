import {useMutation} from '@apollo/client';
import {useCallback} from 'react';
import {useToast} from '~components/Toast';
import updateProfile from '~graphql/queries/updateProfile';
import {UpdateUserProfileInput} from '~graphql/__generated__/graphql';

export default function useUpdateProfile() {
  const toast = useToast();
  const [mutate, {loading, data}] = useMutation(updateProfile, {
    onError: e => toast.show(e.message),
  });

  const update = useCallback(
    (input: UpdateUserProfileInput) =>
      mutate({
        variables: {
          input,
        },
      }),
    [mutate],
  );

  return {
    me: data?.updateProfile,
    loading,
    update,
  };
}
