import {useApolloClient} from '@apollo/client';
import {useCallback, useState} from 'react';
import {Platform} from 'react-native';
import {Asset} from 'react-native-image-picker';
import {useToast} from '~components/Toast';
import env from '~config/env';
import authState from '~graphql/localState/authState';

export default function useUploadAvatar() {
  const toast = useToast();
  const client = useApolloClient();
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const upload = useCallback(async (file: Asset) => {
    setLoading(true);
    try {
      const cacheData = client.readQuery<{token: string | null}>({
        query: authState,
      });
      const url = `${env.restEndpoint}/user/picture`;
      const body = new FormData();
      body.append('avatar', {
        name: file.fileName,
        type: file.type,
        uri:
          Platform.OS === 'android'
            ? file.uri
            : file.uri?.replace('file://', ''),
      });
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          authorization: cacheData?.token ? `Bearer ${cacheData.token}` : '',
        },
        body,
      });

      const result = await response.json();
      if (response.status !== 201) {
        throw new Error(result.message);
      }

      setData(result);
    } catch (e) {
      const reqError = e as Error;
      setError(reqError);
      toast.show(reqError.message);
    }
    setLoading(false);
  }, []);

  return {
    loading,
    upload,
    error,
    data,
  };
}
