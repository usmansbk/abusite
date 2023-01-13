import React from 'react';
import {useTranslation} from 'react-i18next';
import Unauthenticated from '~components/Unauthenticated';
import useAuth from '~hooks/api/useAuth';

export default function Notifications() {
  const {t} = useTranslation();
  const {isLoggedIn} = useAuth();

  if (!isLoggedIn) {
    return (
      <Unauthenticated
        title={t('notifications.unauthenticated.title')}
        message={t('notifications.unauthenticated.message')}
      />
    );
  }

  return null;
}
