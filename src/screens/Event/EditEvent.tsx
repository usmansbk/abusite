import React from 'react';
import EventFormModal from '~components/EventFormModal';
import {EditEventInput} from '~graphql/__generated__/graphql';

interface Props {
  visible: boolean;
  onDismiss: () => void;
  event: EditEventInput;
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
