import React, {memo, useEffect} from 'react';
import EventFormModal from '~components/EventFormModal';
import {EditEventInput} from '~graphql/__generated__/graphql';
import useCreateEvent from '~hooks/api/useCreateEvent';
import useTimetables from '~hooks/useTimetables';

interface Props {
  autoFocus?: boolean;
  visible: boolean;
  onDismiss: () => void;
  onSuccess?: () => void;
  defaultValues?: EditEventInput;
}

function NewEventDialog({
  visible,
  onDismiss,
  defaultValues,
  onSuccess,
  autoFocus = true,
}: Props) {
  const {handleCreateEvent, loading, event} = useCreateEvent();
  const {timetables} = useTimetables();

  useEffect(() => {
    if (event) {
      onDismiss();
      onSuccess?.();
    }
  }, [event]);

  return (
    <EventFormModal
      autoFocus={autoFocus}
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
