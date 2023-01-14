import React from 'react';
import {useTranslation} from 'react-i18next';
import {Appbar} from 'react-native-paper';
import Container from '~components/Container';
import EmptyState from '~components/EmptyState';

export default function Explore() {
  const {t} = useTranslation();
  return (
    <Container>
      <Appbar>
        <Appbar.Content title="" />
        <Appbar.Action icon="search" onPress={() => null} />
        <Appbar.Action icon="sliders" onPress={() => null} />
      </Appbar>
      <EmptyState
        title={t('explore.unauthenticated.title')}
        message={t('explore.unauthenticated.message')}
      />
    </Container>
  );
}
