import React from 'react';
import {useTranslation} from 'react-i18next';
import EmptyState from '~components/EmptyState';
import {EditEventInput} from '~graphql/__generated__/graphql';

interface Props {
  events: EditEventInput[];
}

export default function TimetableCalendar({events}: Props) {
  console.log(events);
  const {t} = useTranslation();
  return (
    <EmptyState
      title={t('calendar.empty.title')}
      message={t('calendar.empty.message')}
    />
  );
}
