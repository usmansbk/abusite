import React from 'react';
import {useTranslation} from 'react-i18next';
import EmptyState from '~components/EmptyState';

export default function Explore() {
  const {t} = useTranslation();
  return (
    <EmptyState
      title={t('explore.unauthenticated.title')}
      message={t('explore.unauthenticated.message')}
    />
  );
}
