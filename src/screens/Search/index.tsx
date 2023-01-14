import React from 'react';
import {useTranslation} from 'react-i18next';
import {Divider, Searchbar} from 'react-native-paper';
import Container from '~components/Container';
import {RootStackScreenProps} from '~types';

export default function Search({navigation}: RootStackScreenProps<'Search'>) {
  const {t} = useTranslation();
  return (
    <Container>
      <Searchbar
        value=""
        placeholder={t('search.title')}
        icon="arrow-left"
        onIconPress={navigation.goBack}
        clearIcon="x"
        elevation={0}
        autoFocus
      />
      <Divider />
    </Container>
  );
}
