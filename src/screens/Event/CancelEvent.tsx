import React, {useCallback, useEffect, useState} from 'react';
import {View} from 'react-native';
import {Button, Dialog, RadioButton} from 'react-native-paper';
import {Event} from '~graphql/__generated__/graphql';
import useCancelEvent from '~hooks/api/useCancelEvent';
import {formatCalendarDate} from '~utils/dateTime';

interface Props {
  event: Event;
  visible: boolean;
  onDismiss: () => void;
}

export default function CancelEvent({visible, event, onDismiss}: Props) {
  const {repeat, startDate, id} = event;
  const [value, setValue] = useState(startDate);
  const {handleCancelEvent, loading, event: cancelledEvent} = useCancelEvent();

  useEffect(() => {
    if (cancelledEvent) {
      onDismiss();
    }
  }, [cancelledEvent]);

  const onConfirm = useCallback(() => {
    handleCancelEvent({
      id,
      date: value === 'all' ? undefined : startDate,
    });
  }, [handleCancelEvent, id]);

  return (
    <Dialog visible={visible} onDismiss={onDismiss}>
      <Dialog.Title>Cancel</Dialog.Title>
      {!!repeat && (
        <Dialog.Content>
          <RadioButton.Group onValueChange={setValue} value={value}>
            <RadioButton.Item label="All" value="all" />
            <RadioButton.Item
              label={formatCalendarDate(startDate)}
              value={startDate}
            />
          </RadioButton.Group>
        </Dialog.Content>
      )}
      <Dialog.Actions>
        <View>
          <Button mode="outlined" onPress={onDismiss}>
            No
          </Button>
        </View>
        <View>
          <Button loading={loading} mode="outlined" onPress={onConfirm}>
            Yes
          </Button>
        </View>
      </Dialog.Actions>
    </Dialog>
  );
}
