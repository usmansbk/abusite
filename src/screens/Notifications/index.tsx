import React from 'react';
import {useTranslation} from 'react-i18next';
import {Appbar} from 'react-native-paper';
import Container from '~components/Container';
import EmptyState from '~components/EmptyState';
import Unauthenticated from '~components/Unauthenticated';
import useAuth from '~hooks/useAuth';

export default function Notifications() {
  const {t} = useTranslation();
  const {isLoggedIn} = useAuth();

  if (!isLoggedIn) {
    return (
      <Unauthenticated
        title={t('notifications.unauthenticated.title')}
        message={t('notifications.unauthenticated.message')}
      />
    );
  }

  return (
    <Container>
      <Appbar>
        <Appbar.Content title="" />
        <Appbar.Action disabled icon="check" />
      </Appbar>
      <EmptyState
        title={t('notifications.empty.title')}
        message={t('notifications.empty.message')}
      />
    </Container>
  );
}
