import {useQuery} from '@apollo/client';
import {useCallback} from 'react';
import themeMode from '~graphql/localState/themeMode';

export type AppThemeMode = 'light' | 'dark' | 'system';

export default function useThemeMode() {
  const {data, client} = useQuery<{themeMode: AppThemeMode}>(themeMode, {
    fetchPolicy: 'cache-only',
  });

  const setThemeMode = useCallback((theme: AppThemeMode) => {
    client.writeQuery<{themeMode: AppThemeMode}>({
      query: themeMode,
      data: {
        themeMode: theme,
      },
    });
  }, []);

  return {
    mode: data?.themeMode,
    setThemeMode,
  };
}
