import React from 'react';
import NewEventDialog from '~components/NewEventDialog';
import {Event} from '~graphql/__generated__/graphql';

interface Props {
  event: Event;
  visible: boolean;
  onDismiss: () => void;
}

export default function DuplicateEvent({visible, onDismiss, event}: Props) {
  return (
    <NewEventDialog
      visible={visible}
      onDismiss={onDismiss}
      defaultValues={event}
    />
  );
}
