import React from "react";
import { Button } from "react-native-paper";

export default function GoogleButton() {
  return (
    <Button
      mode="contained"
      buttonColor="#4285F4"
      textColor="#ffffff"
      onPress={() => null}
    >
      Sign in with Google
    </Button>
  );
}
