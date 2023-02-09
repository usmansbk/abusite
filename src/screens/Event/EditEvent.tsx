import React, {useEffect} from 'react';
import EventFormModal from '~components/EventFormModal';
import {EditEventInput} from '~graphql/__generated__/graphql';
import useUpdateEvent from '~hooks/api/useUpdateEvent';

interface Props {
  visible: boolean;
  onDismiss: () => void;
  defaultValues: EditEventInput;
}

export default function EditEvent({visible, onDismiss, defaultValues}: Props) {
  const {loading, handleUpdateEvent, event} = useUpdateEvent();

  useEffect(() => {
    if (event) {
      onDismiss();
    }
  }, [event]);

  return (
    <EventFormModal
      loading={loading}
      visible={visible}
      onDismiss={onDismiss}
      onSubmit={handleUpdateEvent}
      defaultValues={defaultValues}
    />
  );
}
