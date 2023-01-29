import React from 'react';
import {View} from 'react-native';
import {Appbar, Modal, Portal, Text, useTheme} from 'react-native-paper';
import UserAvatar from '~components/UserAvatar';
import {Timetable} from '~graphql/__generated__/graphql';
import {formatCalendarDate} from '~utils/dateTime';
import styles from './styles';

interface Props {
  visible: boolean;
  onDismiss: () => void;
  timetable: Timetable;
}

export default function InfoDialog({visible, onDismiss, timetable}: Props) {
  const {colors} = useTheme();
  const {owner, createdAt, title} = timetable;
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        style={styles.infoContainer}
        contentContainerStyle={[
          styles.contentContainer,
          {backgroundColor: colors.background},
        ]}>
        <View>
          <Appbar>
            <Appbar.Action icon="x" onPress={onDismiss} />
          </Appbar>
          <View style={styles.modalContent}>
            <Text variant="headlineLarge">{title}</Text>
            <View style={styles.row}>
              <UserAvatar size={40} uri={owner?.picture} />
              <View style={styles.gap}>
                <Text variant="titleMedium">{owner.fullName}</Text>
                <Text>{formatCalendarDate(createdAt)}</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </Portal>
  );
}
