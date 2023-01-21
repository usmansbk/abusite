import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {Divider, List} from 'react-native-paper';
import Container from '~components/Container';
import ConfirmDialog from '~components/ConfirmDialog';
import useMe from '~hooks/api/useMe';
import useLogout from '~hooks/useLogout';
import styles from './styles';
import UpdateProfileForm from './UpdateProfileForm';

export default function Profile() {
  const [openConfirmLogout, setOpenConfirmLogout] = useState(false);
  const [openConfirmDeactivate, setOpenConfirmDeactivate] = useState(false);

  const {me} = useMe();
  const logout = useLogout();

  return (
    <Container>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <UpdateProfileForm user={me!} />
        <Divider />
        <List.Item
          left={props => <List.Icon {...props} icon="log-out" />}
          title="Logout"
          onPress={() => setOpenConfirmLogout(true)}
        />
        {/* <List.Item
          left={props => <List.Icon {...props} icon="trash" />}
          title="Deactivate account"
          onPress={() => setOpenConfirmDeactivate(true)}
        /> */}
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
