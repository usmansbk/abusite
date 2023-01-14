import React from 'react';
import {useTranslation} from 'react-i18next';
import Container from '~components/Container';
import EmptyState from '~components/EmptyState';

export default function Bookmarks() {
  const {t} = useTranslation();

  return (
    <Container>
      <EmptyState
        title={t('bookmarks.empty.title')}
        message={t('bookmarks.empty.message')}
      />
    </Container>
  );
}
