import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {Appbar, TextInput, FAB} from 'react-native-paper';
import EmptyState from '~components/EmptyState';
import styles from './styles';

interface Props {
  autoFocus?: boolean;
}

export default function TimetableForm({autoFocus = true}: Props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Appbar>
        <Appbar.Action onPress={navigation.goBack} icon="x" />
        <Appbar.Content title="" />
        <Appbar.Action icon="check" onPress={() => null} />
      </Appbar>
      <TextInput
        mode="outlined"
        label="Title"
        autoFocus={autoFocus}
        placeholder="Example: My Lectures"
      />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <EmptyState
          title="Add events"
          message="Events can be your lectures, exams, tests, social events etc."
        />
      </ScrollView>
      <FAB
        icon="edit-2"
        style={styles.fab}
        onPress={() => console.log('Pressed')}
      />
    </View>
  );
}
