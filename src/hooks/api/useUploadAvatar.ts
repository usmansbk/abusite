import {useCallback, useState} from 'react';
import {Asset} from 'react-native-image-picker';
import useMe from './useMe';

export default function useUploadAvatar() {
  const [error] = useState<Error | null>(null);
  const {me} = useMe();

  const upload = useCallback(
    (file: Asset) => {
      console.log(file);
    },
    [me],
  );

  return {
    loading: false,
    upload,
    error,
  };
}
