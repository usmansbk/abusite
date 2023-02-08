import React from 'react';
import EventFormModal from '~components/EventFormModal';
import {Event} from '~graphql/__generated__/graphql';

interface Props {
  visible: boolean;
  onDismiss: () => void;
  event: Event;
}

export default function EditEvent({visible, onDismiss, event}: Props) {
  return (
    <EventFormModal
      visible={visible}
      onDismiss={onDismiss}
      onSubmit={() => null}
      defaultValues={event}
    />
  );
}
