import {useMutation} from '@apollo/client';
import {useCallback} from 'react';
import loginWithGoogle from '~graphql/queries/loginWithGoogle';
import {SocialLoginInput} from '~graphql/__generated__/graphql';

export default function useSocialLogin() {
  const [mutate, {loading, data, error}] = useMutation(loginWithGoogle);

  const login = useCallback(
    (input: SocialLoginInput) =>
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
    login,
    data: data?.loginWithSocialProvider,
  };
}
