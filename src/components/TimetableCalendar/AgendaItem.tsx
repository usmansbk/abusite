import React from 'react';
import {View} from 'react-native';
import {Text, TouchableRipple} from 'react-native-paper';
import {EditEventInput} from '~graphql/__generated__/graphql';
import {formatEventTime} from '~utils/event';
import styles from './styles';

interface Props {
  item: EditEventInput;
  onPress: () => void;
}
export default function AgendaItem({onPress, item}: Props) {
  const {title, startTime, endTime} = item;
  const time = formatEventTime(startTime, endTime);
  return (
    <TouchableRipple style={styles.itemContainer} onPress={onPress}>
      <View style={styles.itemContent}>
        <Text variant="titleMedium" numberOfLines={1}>
          {title}
        </Text>
        {!!time && <Text>{time}</Text>}
      </View>
    </TouchableRipple>
  );
}
