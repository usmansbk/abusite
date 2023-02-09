import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, Dialog, RadioButton} from 'react-native-paper';
import {Event} from '~graphql/__generated__/graphql';
import {formatCalendarDate} from '~utils/dateTime';

interface Props {
  event: Event;
  visible: boolean;
  onDismiss: () => void;
}

export default function CancelEvent({visible, event, onDismiss}: Props) {
  const {repeat, startDate} = event;
  const [value, setValue] = useState('all');
  return (
    <Dialog visible={visible} onDismiss={onDismiss}>
      <Dialog.Title>Cancel</Dialog.Title>
      {!!repeat && (
        <Dialog.Content>
          <RadioButton.Group onValueChange={setValue} value={value}>
            <RadioButton.Item label="All" value="all" />
            <RadioButton.Item
              label={formatCalendarDate(startDate)}
              value="date"
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
          <Button mode="outlined">Yes</Button>
        </View>
      </Dialog.Actions>
    </Dialog>
  );
}
