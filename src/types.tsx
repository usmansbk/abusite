import type { NavigatorScreenParams } from "@react-navigation/native";

export type BottomTabParamList = {
  Calendar: undefined;
  Explore: undefined;
  Notifications: undefined;
};

export type RootStackParamList = {
  Login: undefined;
  Home: NavigatorScreenParams<BottomTabParamList>;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
