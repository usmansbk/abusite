import React from "react";
import { Text, View } from "react-native";
import { Button, Provider as PaperProvider } from "react-native-paper";
import theme from "~config/theme";

function Main() {
  return (
    <View>
      <Text>Hello</Text>
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
