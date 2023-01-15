import React, {useCallback} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {TextInput, Button, ActivityIndicator} from 'react-native-paper';
import {launchImageLibrary} from 'react-native-image-picker';
import UserAvatar, {UserAvatarProps} from '~components/UserAvatar';
import useUploadAvatar from '~hooks/api/useUploadAvatar';
import {User} from '~graphql/__generated__/graphql';
import styles from './styles';

interface Props {
  user: User;
}

function UploadUserAvatar({uri, name, size}: UserAvatarProps) {
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

export default function UpdateProfileForm({user}: Props) {
  const {firstName, lastName, picture, email} = user;

  return (
    <View style={styles.form}>
      <View style={styles.avatar}>
        <UploadUserAvatar size={100} uri={picture} name={firstName} />
      </View>
      <TextInput
        autoComplete="name-given"
        mode="outlined"
        label="First name"
        value={firstName}
        style={styles.gap}
      />
      <TextInput
        autoComplete="name-family"
        mode="outlined"
        label="Last name"
        value={lastName}
        style={styles.gap}
      />
      <TextInput
        mode="outlined"
        label="Email"
        editable={false}
        value={email}
        style={styles.gap}
      />
      <Button disabled style={styles.gap} mode="contained">
        Save
      </Button>
    </View>
  );
}
