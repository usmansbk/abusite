import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useMemo} from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, ListRenderItem, View} from 'react-native';
import {Divider} from 'react-native-paper';
import EmptyState from '~components/EmptyState';
import {Event} from '~graphql/__generated__/graphql';
import {byTime} from '~utils/event';
import AgendaItem from './AgendaItem';
import styles from './styles';

interface Props {
  events: Event[];
}

export default function Agenda({events}: Props) {
  const {t} = useTranslation();
  const navigation = useNavigation();

  const onPressItem = useCallback((item: Event) => {
    navigation.navigate('Event', {
      id: item.id,
    });
  }, []);

  const renderItem: ListRenderItem<Event> = useCallback(
    ({item}) => <AgendaItem item={item} onPressItem={onPressItem} />,
    [],
  );

  const data = useMemo(() => Array.from(events).sort(byTime), [events]);

  return (
    <FlatList
      data={data}
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
