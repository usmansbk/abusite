import React from 'react';
import {useTranslation} from 'react-i18next';
import {Button} from 'react-native-paper';
import Container from '~components/Container';
import Unauthenticated from '~components/Unauthenticated';
import useAuth from '~hooks/useAuth';
import useLogout from '~hooks/useLogout';

export default function Calendar() {
  const {t} = useTranslation();
  const {isLoggedIn} = useAuth();
  const logout = useLogout();

  if (!isLoggedIn) {
    return (
      <Unauthenticated
        title={t('calendar.unauthenticated.title')}
        message={t('calendar.unauthenticated.message')}
      />
    );
  }

  return (
    <Container>
      <Button mode="contained" onPress={logout}>
        Logout
      </Button>
    </Container>
  );
}
