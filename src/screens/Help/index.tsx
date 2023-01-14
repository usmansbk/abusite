import React, {useMemo} from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList} from 'react-native';
import {Divider, List} from 'react-native-paper';
import Container from '~components/Container';

export default function Help() {
  const {t} = useTranslation();

  const items = useMemo(
    () => [
      {
        id: 'terms',
        label: t('help.items.terms'),
      },
      {
        id: 'privacy',
        label: t('help.items.privacy'),
      },
      {
        id: 'review',
        label: t('help.items.review'),
      },
      {
        id: 'support',
        label: t('help.items.support'),
      },
    ],
    [],
  );

  return (
    <Container>
      <FlatList
        data={items}
        ItemSeparatorComponent={Divider}
        renderItem={({item: {label}}) => (
          <List.Item title={label} onPress={() => null} />
        )}
      />
    </Container>
  );
}
