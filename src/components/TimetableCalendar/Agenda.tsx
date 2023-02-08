import React, {useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, ListRenderItem, View} from 'react-native';
import {Divider} from 'react-native-paper';
import EmptyState from '~components/EmptyState';
import {EditEventInput} from '~graphql/__generated__/graphql';
import AgendaItem from './AgendaItem';
import styles from './styles';

interface Props {
  events: EditEventInput[];
}

export default function Agenda({events}: Props) {
  const {t} = useTranslation();

  const renderItem: ListRenderItem<EditEventInput> = useCallback(
    () => <AgendaItem />,
    [],
  );

  return (
    <FlatList
      data={events}
      renderItem={renderItem}
      ItemSeparatorComponent={Divider}
      ListEmptyComponent={
        <EmptyState
          title={t('calendar.empty.title')}
          message={t('calendar.empty.message')}
        />
      }
      ListFooterComponent={<View style={styles.footer} />}
    />
  );
}
