import React from "react";
import { View } from "react-native";
import { Button, Provider as PaperProvider, Text } from "react-native-paper";
import theme from "~config/theme";

function Main() {
  return (
    <View>
      <Text variant="displayLarge">Hello</Text>
      <Button mode="contained">Hello</Button>
    </View>
  );
}

function App() {
  return (
    <PaperProvider theme={theme}>
      <Main />
    </PaperProvider>
  );
}

export default App;
