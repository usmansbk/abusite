import React, {useCallback} from 'react';
import {Appbar} from 'react-native-paper';

interface Props {
  isSaved: boolean;
}

export default function SaveTimetableButton({isSaved}: Props) {
  const onPress = useCallback(() => {}, []);

  return (
    <Appbar.Action icon={isSaved ? 'trash' : 'bookmark'} onPress={onPress} />
  );
}
