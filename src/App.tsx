import React from "react";
import { StatusBar, View } from "react-native";
import { Provider as PaperProvider, useTheme } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import theme from "~config/theme";
import Screens from "~screens";

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
      <Screens />
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
