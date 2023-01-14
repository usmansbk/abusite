import React, {useMemo} from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, Linking, Platform} from 'react-native';
import {Divider, List} from 'react-native-paper';
import Container from '~components/Container';
import {useToast} from '~components/Toast';
import env from '~config/env';

export default function Help() {
  const {t} = useTranslation();
  const toast = useToast();

  const items = useMemo(
    () => [
      {
        id: 'terms',
        label: t('help.items.terms'),
        onPress: () => {
          Linking.openURL(env.termsUrl);
        },
      },
      {
        id: 'privacy',
        label: t('help.items.privacy'),
        onPress: () => {
          Linking.openURL(env.privacyUrl);
        },
      },
      {
        id: 'support',
        label: t('help.items.support'),
        onPress: async () => {
          const url = `mailto:${env.contactEmail}?subject=[${Platform.OS}]`;
          try {
            await Linking.openURL(url);
          } catch (e) {
            toast.show((e as Error).message);
          }
        },
      },
    ],
    [],
  );

  return (
    <Container>
      <FlatList
        data={items}
        ItemSeparatorComponent={Divider}
        renderItem={({item: {label, onPress}}) => (
          <List.Item title={label} onPress={onPress} />
        )}
      />
    </Container>
  );
}
