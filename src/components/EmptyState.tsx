import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Text} from 'react-native-paper';

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    padding: 16,
  },
  body: {
    flexGrow: 1,
    padding: 16,
    justifyContent: 'center',
  },
});

interface Props {
  title: string;
  message?: string;
}

export default function EmptyState({title, message}: Props) {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.body}>
        <Text variant="displaySmall">{title}</Text>
        {!!message && <Text>{message}</Text>}
      </View>
    </ScrollView>
  );
}
