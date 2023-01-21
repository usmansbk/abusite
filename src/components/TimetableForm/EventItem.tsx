import capitalize from 'lodash.capitalize';
import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import {
  IconButton,
  Surface,
  Text,
  TouchableRipple,
  Menu,
} from 'react-native-paper';
import {EditEventInput} from '~graphql/__generated__/graphql';
import styles from './styles';

type ItemT = EditEventInput & Record<'key', string>;

interface Props {
  item: ItemT;
  onPressItem?: (item: ItemT) => void;
  onDuplicateItem?: (item: ItemT) => void;
  onDeleteItem?: (item: ItemT) => void;
}

function formatTime(startTime: string, endTime: string) {
  if (startTime && endTime) {
    return `${startTime} - ${endTime}`;
  }

  return startTime;
}

export default function EventItem({
  item,
  onPressItem,
  onDeleteItem,
  onDuplicateItem,
}: Props) {
  const [visible, setVisible] = useState(false);
  const {title, repeat, startTime, endTime} = item;

  const time = [formatTime(startTime, endTime), repeat && capitalize(repeat)]
    .join(' ')
    .trim();

  const openMenu = useCallback(() => setVisible(true), []);
  const closeMenu = useCallback(() => setVisible(false), []);

  const onPress = useCallback(() => onPressItem?.(item), [item, onPressItem]);

  const onDuplicate = useCallback(() => {
    onDuplicateItem?.(item);
    closeMenu();
  }, [item, onPressItem]);

  const onDelete = useCallback(() => {
    onDeleteItem?.(item);
    closeMenu();
  }, [item, onPressItem]);

  return (
    <TouchableRipple onPress={onPress}>
      <Surface elevation={0} style={styles.itemContainer}>
        <View style={styles.span}>
          <Text variant="labelLarge">{title}</Text>
          {time && <Text variant="labelMedium">{time}</Text>}
        </View>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<IconButton icon="more-vertical" onPress={openMenu} />}>
          <Menu.Item onPress={onDuplicate} title="Duplicate" />
          <Menu.Item onPress={onDelete} title="Delete" />
        </Menu>
      </Surface>
    </TouchableRipple>
  );
}
