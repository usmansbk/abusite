import React from 'react';
import {View} from 'react-native';
import {Text, TouchableRipple} from 'react-native-paper';
import {EditEventInput} from '~graphql/__generated__/graphql';
import styles from './styles';

interface Props {
  item: EditEventInput;
  onPressItem?: (item: EditEventInput) => void;
}
export default function EventItem({item, onPressItem}: Props) {
  const {title, repeat} = item;

  return (
    <TouchableRipple onPress={() => onPressItem?.(item)}>
      <View style={styles.itemContainer}>
        <Text variant="headlineSmall">{title}</Text>
        {!!repeat && <Text>{repeat}</Text>}
      </View>
    </TouchableRipple>
  );
}
