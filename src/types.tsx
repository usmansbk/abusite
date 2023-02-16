import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {DrawerScreenProps} from '@react-navigation/drawer';

export type AppDrawerParamList = {
  Calendar: undefined;
};

export type RootStackParamList = {
  Login: undefined;
  Home: NavigatorScreenParams<AppDrawerParamList>;
  Timetable: {id: string};
  NewTimetable: undefined;
  EditTimetable: {id: string};
  DuplicateTimetable: {id: string};
  Profile: undefined;
  Bookmarks: undefined;
  Archive: undefined;
  Help: undefined;
  Search: undefined;
  ExploreSettings: undefined;
  Settings: undefined;
  Event: {id: string};
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type AppDrawerScreenProps<T extends keyof AppDrawerParamList> =
  CompositeScreenProps<
    DrawerScreenProps<AppDrawerParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type DefaultReminders = {
  '0': boolean;
  '5': boolean;
  '10': boolean;
  '15': boolean;
  '30': boolean;
  '45': boolean;
  '60': boolean;
};
