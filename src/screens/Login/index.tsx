import React from "react";
import { ScrollView, View } from "react-native";
import GoogleButton from "~components/GoogleButton";
import styles from "./styles";

export default function Login() {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.body} />
      <GoogleButton />
    </ScrollView>
  );
}
