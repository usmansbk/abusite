import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, View} from 'react-native';
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
      <FlatList
        data={[]}
        contentContainerStyle={styles.contentContainer}
        stickyHeaderIndices={[0]}
        renderItem={() => null}
        ListHeaderComponent={
          <TextInput
            mode="outlined"
            label="Title"
            autoFocus={autoFocus}
            placeholder="Example: My Lectures"
          />
        }
        ListEmptyComponent={
          <EmptyState
            title="Add events"
            message="Example: Lectures, Exams, Tests, Social events etc."
            style={styles.emptyList}
          />
        }
      />
      <FAB icon="edit-2" style={styles.fab} onPress={() => null} />
    </View>
  );
}
