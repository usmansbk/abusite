import React from 'react';
import {useTranslation} from 'react-i18next';
import Container from '~components/Container';
import EmptyState from '~components/EmptyState';

export default function Archive() {
  const {t} = useTranslation();

  return (
    <Container>
      <EmptyState title={t('archive.empty.title')} />
    </Container>
  );
}
