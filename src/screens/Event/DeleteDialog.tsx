import React from 'react';
import ConfirmDialog from '~components/ConfirmDialog';

interface Props {
  visible: boolean;
  onDismiss: () => void;
}

export default function DeleteDialog({visible, onDismiss}: Props) {
  return (
    <ConfirmDialog
      visible={visible}
      onDismiss={onDismiss}
      title="Delete this event?"
      onConfirm={() => null}
    />
  );
}
