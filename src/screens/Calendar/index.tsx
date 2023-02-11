import React from 'react';
import {useTranslation} from 'react-i18next';
import {Appbar} from 'react-native-paper';
import Container from '~components/Container';
import Unauthenticated from '~components/Unauthenticated';
import useAuth from '~hooks/useAuth';
import {HomeTabScreenProps} from '~types';
import Timeline from './Timeline';

export default function Calendar({navigation}: HomeTabScreenProps<'Calendar'>) {
  const {t} = useTranslation();
  const {isLoggedIn} = useAuth();

  return (
    <Container>
      {isLoggedIn ? (
        <Timeline onPressMenu={navigation.openDrawer} />
      ) : (
        <>
          <Appbar>
            <Appbar.Action icon="menu" onPress={navigation.openDrawer} />
            <Appbar.Content title="" />
          </Appbar>
          <Unauthenticated
            title={t('calendar.unauthenticated.title')}
            message={t('calendar.unauthenticated.message')}
          />
        </>
      )}
    </Container>
  );
}
