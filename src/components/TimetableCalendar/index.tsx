import React from 'react';
import {useTranslation} from 'react-i18next';
import EmptyState from '~components/EmptyState';

export default function TimetableCalendar() {
  const {t} = useTranslation();
  return (
    <EmptyState
      title={t('calendar.empty.title')}
      message={t('calendar.empty.message')}
    />
  );
}
