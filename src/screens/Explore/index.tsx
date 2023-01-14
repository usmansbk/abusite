import React from 'react';
import {useTranslation} from 'react-i18next';
import {Appbar} from 'react-native-paper';
import Container from '~components/Container';
import EmptyState from '~components/EmptyState';
import useAuth from '~hooks/useAuth';
import {HomeTabScreenProps} from '~types';

export default function Explore({navigation}: HomeTabScreenProps<'Explore'>) {
  const {t} = useTranslation();
  const {isLoggedIn} = useAuth();

  return (
    <Container>
      <Appbar>
        <Appbar.Content title="" />
        <Appbar.Action
          icon="search"
          onPress={() => navigation.navigate('Search')}
        />
        <Appbar.Action
          disabled={!isLoggedIn}
          icon="sliders"
          onPress={() => navigation.navigate('ExploreSettings')}
        />
      </Appbar>
      <EmptyState
        title={t('explore.empty.title')}
        message={t('explore.empty.message')}
      />
    </Container>
  );
}
