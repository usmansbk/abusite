import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text} from 'react-native-paper';
import Container from '~components/Container';
import Unauthenticated from '~components/Unauthenticated';
import useAuth from '~hooks/useAuth';

export default function Calendar() {
  const {t} = useTranslation();
  const {isLoggedIn} = useAuth();

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
      <Text>Hello</Text>
    </Container>
  );
}
