import React from 'react';
import {ScrollView, View} from 'react-native';
import {Button, Divider, List, TextInput} from 'react-native-paper';
import UserAvatar from '~components/UserAvatar';
import Container from '~components/Container';
import useMe from '~hooks/api/useMe';
import useLogout from '~hooks/useLogout';
import styles from './styles';

export default function Profile() {
  const {me} = useMe();
  const logout = useLogout();

  const {firstName, lastName, picture, email} = me!;

  return (
    <Container>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.form}>
          <View style={styles.avatar}>
            <UserAvatar size={100} name={firstName} uri={picture} />
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
        <Divider />
        <List.Item
          left={props => <List.Icon {...props} icon="log-out" />}
          title="Logout"
          onPress={logout}
        />
        <List.Item
          left={props => <List.Icon {...props} icon="trash" />}
          title="Deactivate account"
          onPress={logout}
        />
      </ScrollView>
    </Container>
  );
}
