import React from 'react';
import {ScrollView, SafeAreaView, View} from 'react-native';
import {
  Appbar,
  Modal,
  Portal,
  ProgressBar,
  TextInput,
  useTheme,
} from 'react-native-paper';
import PickerInput from '~components/PickerInput';
import styles from './styles';

interface Props {
  visible: boolean;
  onDismiss: () => void;
  title?: string;
  autoFocus?: boolean;
  loading?: boolean;
}

export default function EventFormModal({
  visible,
  onDismiss,
  title,
  autoFocus,
  loading,
}: Props) {
  const {colors} = useTheme();

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        style={styles.modalContainer}
        contentContainerStyle={styles.modalContentContainer}>
        <SafeAreaView style={{backgroundColor: colors.background}}>
          <Appbar>
            <Appbar.Action icon="x" onPress={onDismiss} />
            <Appbar.Content title={title} />
            <Appbar.Action disabled={loading} icon="check" />
          </Appbar>
          <ProgressBar visible={loading} />
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <TextInput
              label="Title"
              mode="outlined"
              placeholder="Example: Maths101"
              autoFocus={autoFocus}
            />
            <View style={styles.gap}>
              <PickerInput
                value="Today"
                required={false}
                label="Date"
                placeholder="When"
                onPress={() => console.log('Hello')}
              />
            </View>
            <View style={[styles.row, styles.gap]}>
              <View style={styles.span}>
                <PickerInput
                  label="From"
                  placeholder="Start time"
                  onPress={() => console.log('Hello')}
                />
              </View>
              <View style={styles.rowGap} />
              <View style={styles.span}>
                <PickerInput
                  label="To"
                  placeholder="End time"
                  onPress={() => console.log('Hello')}
                />
              </View>
            </View>
            <View style={styles.gap}>
              <PickerInput
                label="Repeat"
                onPress={() => console.log('Hello')}
              />
            </View>
            <View style={styles.gap}>
              <PickerInput
                label="Timetable"
                onPress={() => console.log('Hello')}
              />
            </View>
            <TextInput
              multiline
              label="Description"
              mode="outlined"
              placeholder="Add description"
              style={styles.gap}
            />
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </Portal>
  );
}
