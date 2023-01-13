import React from "react";
import { StatusBar, View } from "react-native";
import { Provider as PaperProvider, useTheme } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import theme from "~config/theme";
import Screens from "~screens";
import Icon from "~components/Icon";
import "~config/i18n";

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
    <PaperProvider
      theme={theme}
      settings={{
        icon: (props) => <Icon {...props} />,
      }}
    >
      <NavigationContainer theme={theme}>
        <Main />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
