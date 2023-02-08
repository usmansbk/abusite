import React from 'react';
import {Text, TouchableRipple} from 'react-native-paper';
import {EditEventInput} from '~graphql/__generated__/graphql';
import styles from './styles';

interface Props {
  item: EditEventInput;
  onPress: () => void;
}
export default function AgendaItem({onPress, item}: Props) {
  const {title} = item;
  return (
    <TouchableRipple style={styles.itemContainer} onPress={onPress}>
      <Text numberOfLines={1}>{title}</Text>
    </TouchableRipple>
  );
}
