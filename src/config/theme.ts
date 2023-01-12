import {
  configureFonts,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";
import { darkColors } from "./colors";
import fontConfig from "./fonts";

const theme: typeof DefaultTheme = {
  ...DefaultTheme,
  colors: darkColors,
  fonts: configureFonts({ config: fontConfig }),
};

export default theme;
