import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {FlatList, View} from 'react-native';
import {Appbar, TextInput, FAB, ProgressBar} from 'react-native-paper';
import EmptyState from '~components/EmptyState';
import styles from './styles';

interface Props {
  autoFocus?: boolean;
  loading?: boolean;
}

export default function TimetableForm({autoFocus = true, loading}: Props) {
  const navigation = useNavigation();
  const {
    control,
    formState: {isDirty},
    handleSubmit,
  } = useForm();

  return (
    <View style={styles.container}>
      <Appbar>
        <Appbar.Action onPress={navigation.goBack} icon="x" />
        <Appbar.Content title="" />
        <Appbar.Action
          icon="check"
          disabled={loading || !isDirty}
          onPress={handleSubmit(() => null)}
        />
      </Appbar>
      <ProgressBar visible={loading} />
      <FlatList
        data={[]}
        contentContainerStyle={styles.contentContainer}
        renderItem={() => null}
        ListHeaderComponent={
          <Controller
            control={control}
            name="title"
            render={({field: {value, onBlur, onChange}}) => (
              <TextInput
                mode="outlined"
                label="Title"
                autoFocus={autoFocus}
                placeholder="Example: My Lectures"
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
              />
            )}
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
