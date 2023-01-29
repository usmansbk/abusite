import React, {memo} from 'react';
import ConfirmDialog from '~components/ConfirmDialog';

interface Props {
  id: string;
  visible: boolean;
  onDismiss: () => void;
}

function DeleteDialog({visible, onDismiss, id}: Props) {
  return (
    <ConfirmDialog
      visible={visible}
      onDismiss={onDismiss}
      title="Delete this timetable?"
      onConfirm={() => console.log(id)}
    />
  );
}

export default memo(DeleteDialog);
