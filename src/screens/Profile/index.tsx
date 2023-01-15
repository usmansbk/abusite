import React, {useState} from 'react';
import {ScrollView, View, TouchableOpacity} from 'react-native';
import {Button, Divider, List, TextInput} from 'react-native-paper';
import UserAvatar from '~components/UserAvatar';
import Container from '~components/Container';
import ConfirmDialog from '~components/ConfirmDialog';
import useMe from '~hooks/api/useMe';
import useLogout from '~hooks/useLogout';
import styles from './styles';

export default function Profile() {
  const [openConfirmLogout, setOpenConfirmLogout] = useState(false);
  const [openConfirmDeactivate, setOpenConfirmDeactivate] = useState(false);

  const {me} = useMe();
  const logout = useLogout();

  const {firstName, lastName, picture, email} = me!;

  return (
    <Container>
      <ScrollView contentContainerStyle={styles.contentContainer}>
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
        <Divider />
        <List.Item
          left={props => <List.Icon {...props} icon="log-out" />}
          title="Logout"
          onPress={() => setOpenConfirmLogout(true)}
        />
        <List.Item
          left={props => <List.Icon {...props} icon="trash" />}
          title="Deactivate account"
          onPress={() => setOpenConfirmDeactivate(true)}
        />
      </ScrollView>
      <ConfirmDialog
        title="Log out?"
        onDismiss={() => setOpenConfirmLogout(false)}
        onConfirm={logout}
        visible={openConfirmLogout}
      />
      <ConfirmDialog
        title="Deactivate your account?"
        message="Your account data will be permanently deleted in 3 months. Log back in to cancel deletion before the deadline."
        onDismiss={() => setOpenConfirmDeactivate(false)}
        onConfirm={logout}
        visible={openConfirmDeactivate}
      />
    </Container>
  );
}
