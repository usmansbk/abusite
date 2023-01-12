import React from "react";
import { ScrollView, View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "./styles";

interface Props {
  title: string;
  message: string;
}

export default function Unauthenticated({ title, message }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.body}>
        <Text variant="displaySmall" style={styles.centeredText}>
          {title}
        </Text>
        <Text style={[styles.centeredText, styles.gap]}>{message}</Text>
      </View>
      <Button onPress={() => null} mode="contained" style={styles.gap}>
        Login to continue
      </Button>
    </ScrollView>
  );
}
