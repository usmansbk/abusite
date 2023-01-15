import {useApolloClient} from '@apollo/client';
import {useCallback, useState} from 'react';
import {Platform} from 'react-native';
import {Asset} from 'react-native-image-picker';
import {useToast} from '~components/Toast';
import env from '~config/env';
import authState from '~graphql/localState/authState';
import useMe from './useMe';

export default function useUploadAvatar() {
  const toast = useToast();
  const client = useApolloClient();
  const [loading, setLoading] = useState(false);
  const {me} = useMe();

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

      client.cache.modify({
        id: client.cache.identify(me!),
        fields: {
          picture() {
            return result.picture;
          },
        },
      });
    } catch (e) {
      toast.show((e as Error).message);
    }
    setLoading(false);
  }, []);

  return {
    loading,
    upload,
  };
}
