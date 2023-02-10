import React, {useCallback} from 'react';
import {View} from 'react-native';
import {Text, TouchableRipple} from 'react-native-paper';
import {Event} from '~graphql/__generated__/graphql';
import {formatEventTime} from '~utils/event';
import styles from './styles';

interface Props {
  item: Event;
  onPressItem: (item: Event) => void;
}
export default function AgendaItem({onPressItem, item}: Props) {
  const {title, startTime, endTime, isAllCancelled, cancelledDates, startDate} =
    item;
  const time = formatEventTime(startTime, endTime);

  const onPress = useCallback(() => onPressItem(item), []);
  const isCancelled = isAllCancelled || cancelledDates.includes(startDate);

  return (
    <TouchableRipple style={styles.itemContainer} onPress={onPress}>
      <View style={styles.itemContent}>
        <Text
          variant="titleMedium"
          numberOfLines={1}
          style={{
            textDecorationLine: isCancelled ? 'line-through' : 'none',
          }}>
          {title}
        </Text>
        {!!time && <Text>{time}</Text>}
      </View>
    </TouchableRipple>
  );
}
