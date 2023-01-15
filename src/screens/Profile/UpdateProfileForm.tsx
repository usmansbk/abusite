import React, {useEffect} from 'react';
import {View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {useForm, Controller} from 'react-hook-form';
import {UpdateUserProfileInput, User} from '~graphql/__generated__/graphql';
import useUpdateProfile from '~hooks/api/useUpdateProfile';
import UploadUserAvatar from './UploadUserAvatar';
import styles from './styles';

interface Props {
  user: User;
}

export default function UpdateProfileForm({user}: Props) {
  const {firstName, lastName, picture, email} = user;
  const {loading, update} = useUpdateProfile();

  const {
    control,
    handleSubmit,
    reset,
    formState: {isDirty, touchedFields, errors},
  } = useForm<UpdateUserProfileInput>();

  useEffect(() => {
    reset({
      firstName,
      lastName,
    });
  }, [firstName, lastName]);

  return (
    <View style={styles.form}>
      <View style={styles.avatar}>
        <UploadUserAvatar size={100} uri={picture} name={firstName} />
      </View>
      <Controller
        control={control}
        name="firstName"
        render={({field: {value, onChange, onBlur}}) => (
          <TextInput
            autoComplete="name-given"
            mode="outlined"
            label="First name"
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            style={styles.gap}
            error={Boolean(
              touchedFields.firstName && errors.firstName?.message,
            )}
          />
        )}
      />
      <Controller
        name="lastName"
        control={control}
        render={({field: {value, onChange, onBlur}}) => (
          <TextInput
            autoComplete="name-family"
            mode="outlined"
            label="Last name"
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            style={styles.gap}
            error={Boolean(touchedFields.lastName && errors.lastName?.message)}
          />
        )}
      />
      <TextInput
        mode="outlined"
        label="Email"
        editable={false}
        value={email}
        style={styles.gap}
      />
      <Button
        loading={loading}
        disabled={loading || !isDirty}
        style={styles.gap}
        mode="contained"
        onPress={handleSubmit(update)}>
        Save
      </Button>
    </View>
  );
}
