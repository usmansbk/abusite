import React from "react";
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function GoogleButton() {
  return (
    <Button
      icon={() => <Icon name="google" size={24} />}
      mode="contained"
      buttonColor="#4285F4"
      textColor="#ffffff"
      onPress={() => null}
    >
      Sign in with Google
    </Button>
  );
}
