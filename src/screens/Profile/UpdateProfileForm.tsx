import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import UserAvatar from '~components/UserAvatar';
import {User} from '~graphql/__generated__/graphql';
import styles from './styles';

interface Props {
  user: User;
}
export default function UpdateProfileForm({user}: Props) {
  const {firstName, lastName, picture, email} = user;
  return (
    <View style={styles.form}>
      <View style={styles.avatar}>
        <TouchableOpacity onPress={() => null}>
          <UserAvatar size={100} name={firstName} uri={picture} />
        </TouchableOpacity>
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
