import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {launchImageLibrary} from 'react-native-image-picker';
import UserAvatar, {UserAvatarProps} from '~components/UserAvatar';
import useUploadAvatar from '~hooks/api/useUploadAvatar';
import styles from './styles';

export default function UploadUserAvatar({uri, name, size}: UserAvatarProps) {
  const {upload, loading} = useUploadAvatar();
  const onPress = useCallback(async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      includeBase64: false,
      quality: 1,
    });

    if (!result.didCancel && result.assets?.[0]) {
      const [file] = result.assets;
      upload(file);
    }
  }, []);

  return (
    <TouchableOpacity
      disabled={loading}
      onPress={onPress}
      style={styles.avatar}>
      <UserAvatar size={size} name={name} uri={uri} />
      <ActivityIndicator
        hidesWhenStopped
        animating={loading}
        style={styles.uploading}
      />
    </TouchableOpacity>
  );
}
