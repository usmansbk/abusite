import React from 'react';
import {Appbar} from 'react-native-paper';

interface Props {
  onPressMenu: () => void;
}

export default function TimetableCalendar({onPressMenu}: Props) {
  return (
    <Appbar>
      <Appbar.Action icon="menu" onPress={onPressMenu} />
      <Appbar.Content title="" />
    </Appbar>
  );
}
