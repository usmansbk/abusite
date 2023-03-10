import React from 'react';
import {useTranslation} from 'react-i18next';
import {Appbar} from 'react-native-paper';
import Container from '~components/Container';
import EmptyState from '~components/EmptyState';
import Unauthenticated from '~components/Unauthenticated';
import useAuth from '~hooks/useAuth';
import {HomeTabScreenProps} from '~types';

export default function Notifications({
  navigation,
}: HomeTabScreenProps<'Notifications'>) {
  const {t} = useTranslation();
  const {isLoggedIn} = useAuth();

  return (
    <Container>
      <Appbar>
        <Appbar.Action icon="menu" onPress={navigation.openDrawer} />
        <Appbar.Content title="" />
      </Appbar>
      {isLoggedIn ? (
        <EmptyState
          title={t('notifications.empty.title')}
          message={t('notifications.empty.message')}
        />
      ) : (
        <Unauthenticated
          title={t('notifications.unauthenticated.title')}
          message={t('notifications.empty.message')}
        />
      )}
    </Container>
  );
}
