import React from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList} from 'react-native';
import EmptyState from '~components/EmptyState';
import {EditEventInput} from '~graphql/__generated__/graphql';

interface Props {
  events: EditEventInput[];
}

export default function TimetableCalendar({events}: Props) {
  const {t} = useTranslation();

  return (
    <FlatList
      data={events}
      renderItem={() => null}
      ListEmptyComponent={
        <EmptyState
          title={t('calendar.empty.title')}
          message={t('calendar.empty.message')}
        />
      }
    />
  );
}
