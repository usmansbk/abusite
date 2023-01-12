import React from "react";
import { StatusBar, View } from "react-native";
import {
  Button,
  Provider as PaperProvider,
  Text,
  useTheme,
} from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import theme from "~config/theme";

function Main() {
  const { colors, dark } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <StatusBar
        backgroundColor={colors.background}
        barStyle={dark ? "light-content" : "dark-content"}
      />
      <Text variant="displayLarge">Hello</Text>
      <Text>Hello World</Text>
      <Button mode="contained">Hello</Button>
    </View>
  );
}

function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Main />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
