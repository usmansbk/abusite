import {useMutation} from '@apollo/client';
import {useCallback} from 'react';
import authState from '~graphql/localState/authState';
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
        update(cache, {data: loginData}) {
          if (loginData?.loginWithSocialProvider) {
            const {token} = loginData.loginWithSocialProvider;
            cache.writeQuery<{token: string}>({
              query: authState,
              data: {
                token,
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
    login,
    data: data?.loginWithSocialProvider,
  };
}
