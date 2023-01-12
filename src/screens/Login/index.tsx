import React from "react";
import { ScrollView, View } from "react-native";
import { Button } from "react-native-paper";
import { RootStackScreenProps } from "~types";
import styles from "./styles";

export default function Login({ navigation }: RootStackScreenProps<"Login">) {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.body} />
      <Button
        mode="contained"
        onPress={() =>
          navigation.navigate("Home", {
            screen: "Calendar",
          })
        }
      >
        Continue with Google
      </Button>
    </ScrollView>
  );
}
