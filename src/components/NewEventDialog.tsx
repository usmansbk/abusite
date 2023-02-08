import React, {memo, useEffect} from 'react';
import EventFormModal from '~components/EventFormModal';
import {Event} from '~graphql/__generated__/graphql';
import useCreateEvent from '~hooks/api/useCreateEvent';
import useTimetables from '~hooks/useTimetables';

interface Props {
  visible: boolean;
  onDismiss: () => void;
  defaultValues?: Event;
}

function NewEventDialog({visible, onDismiss, defaultValues}: Props) {
  const {handleCreateEvent, loading, event} = useCreateEvent();
  const {timetables} = useTimetables();

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
      timetables={timetables}
      loading={loading}
      onSubmit={handleCreateEvent}
      defaultValues={defaultValues}
    />
  );
}

export default memo(NewEventDialog);
