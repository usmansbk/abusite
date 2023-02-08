import React from 'react';
import {StyleSheet, ScrollView, View, ViewStyle} from 'react-native';
import {Text} from 'react-native-paper';

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    padding: 16,
  },
  body: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gap: {
    marginVertical: 8,
  },
  centeredText: {
    textAlign: 'center',
  },
});

interface Props {
  title: string;
  message?: string;
  style?: ViewStyle;
}

export default function EmptyState({title, message, style}: Props) {
  return (
    <ScrollView contentContainerStyle={[styles.contentContainer, style]}>
      <View style={styles.body}>
        <Text variant="displaySmall" style={styles.centeredText}>
          {title}
        </Text>
        {!!message && (
          <Text style={[styles.gap, styles.centeredText]}>{message}</Text>
        )}
      </View>
    </ScrollView>
  );
}
