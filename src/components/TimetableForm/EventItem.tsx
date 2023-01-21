import React from 'react';
import {IconButton, List} from 'react-native-paper';
import {EditEventInput} from '~graphql/__generated__/graphql';

interface Props {
  item: EditEventInput;
  onPressItem?: (item: EditEventInput) => void;
}

function formatTime(startTime: string, endTime: string) {
  if (startTime && endTime) {
    return `${startTime} - ${endTime}`;
  }

  return startTime;
}

export default function EventItem({item, onPressItem}: Props) {
  const {title, repeat, startTime, endTime} = item;

  const time = [formatTime(startTime, endTime), repeat].join(' ').trim();

  return (
    <List.Item
      onPress={() => onPressItem?.(item)}
      title={title}
      description={time}
      titleNumberOfLines={1}
      right={props => (
        <IconButton {...props} icon="more-vertical" onPress={() => null} />
      )}
    />
  );
}
