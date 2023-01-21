import React, {memo, useEffect} from 'react';
import EventFormModal from '~components/EventFormModal';
import useCreateEvent from '~hooks/api/useCreateEvent';

interface Props {
  visible: boolean;
  onDismiss: () => void;
}

function NewEventDialog({visible, onDismiss}: Props) {
  const {handleCreateEvent, loading, event} = useCreateEvent();

  useEffect(() => {
    if (event) {
      onDismiss();
    }
  }, [event]);

  return (
    <EventFormModal
      autoFocus
      visible={visible}
      onDismiss={onDismiss}
      timetables={[]}
      loading={loading}
      onSubmit={handleCreateEvent}
    />
  );
}

export default memo(NewEventDialog);
