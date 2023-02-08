import React from 'react';
import EventFormModal from '~components/EventFormModal';
import {Event} from '~graphql/__generated__/graphql';

interface Props {
  event: Event;
  visible: boolean;
  onDismiss: () => void;
}

export default function DuplicateEvent({visible, onDismiss, event}: Props) {
  return (
    <EventFormModal
      visible={visible}
      onDismiss={onDismiss}
      onSubmit={() => null}
      defaultValues={event}
    />
  );
}
