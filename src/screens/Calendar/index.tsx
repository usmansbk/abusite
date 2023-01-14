import React from 'react';
import {useTranslation} from 'react-i18next';
import Unauthenticated from '~components/Unauthenticated';
import useAuth from '~hooks/useAuth';
import Timeline from './Timeline';

export default function Calendar() {
  const {t} = useTranslation();
  const {isLoggedIn} = useAuth();

  if (!isLoggedIn) {
    return (
      <Unauthenticated
        title={t('calendar.unauthenticated.title')}
        message={t('calendar.unauthenticated.message')}
      />
    );
  }

  return <Timeline />;
}
