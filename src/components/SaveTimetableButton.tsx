import React, {useCallback} from 'react';
import {Appbar} from 'react-native-paper';
import {Timetable} from '~graphql/__generated__/graphql';
import useSaveTimetable from '~hooks/api/useSaveTimetable';
import useUnsaveTimetable from '~hooks/api/useUnsaveTimetable';

interface Props {
  timetable: Timetable;
}

export default function SaveTimetableButton({timetable}: Props) {
  const {id, isSaved} = timetable;
  const {loading: isSaving, handleSave} = useSaveTimetable();
  const {loading: isUnsaving, handleUnsave} = useUnsaveTimetable();
  const onPress = useCallback(() => {
    if (isSaved) {
      handleUnsave({id});
    } else {
      handleSave({id});
    }
  }, [id, isSaved]);

  return (
    <Appbar.Action
      disabled={isSaving || isUnsaving}
      icon={isSaved ? 'trash' : 'bookmark'}
      onPress={onPress}
    />
  );
}
