import React from 'react';
import {View} from 'react-native';
import {Button, Dialog, Portal, Text} from 'react-native-paper';

interface Props {
  visible: boolean;
  onDismiss: () => void;
  onConfirm: () => void;
  title: string;
  message?: string;
}

export default function ConfirmDialog({
  visible,
  onDismiss,
  onConfirm,
  title,
  message,
}: Props) {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Title>{title}</Dialog.Title>
        {!!message && (
          <Dialog.Content>
            <Text>{message}</Text>
          </Dialog.Content>
        )}
        <Dialog.Actions>
          <View>
            <Button mode="outlined" onPress={onDismiss}>
              No
            </Button>
          </View>
          <View>
            <Button mode="outlined" onPress={onConfirm}>
              Yes
            </Button>
          </View>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}
