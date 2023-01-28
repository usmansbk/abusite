import React from 'react';
import {Divider, Surface, Text, useTheme} from 'react-native-paper';
import {formatCalendarDate} from '~utils/dateTime';
import styles from './styles';

interface Props {
  title: string;
}

export default function DateHeader({title}: Props) {
  const {colors} = useTheme();
  return (
    <>
      <Surface
        elevation={0}
        style={[
          styles.sectionHeader,
          {backgroundColor: colors.elevation.level1},
        ]}>
        <Text variant="labelSmall">
          {formatCalendarDate(title).toLocaleUpperCase()}
        </Text>
      </Surface>
      <Divider />
    </>
  );
}
