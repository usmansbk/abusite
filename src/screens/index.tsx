import * as React from 'react';
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack';
import {Appbar} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import type {RootStackParamList} from '~types';
import useAuth from '~hooks/useAuth';
import AppDrawer from './AppDrawer';
import Login from './Login';
import Profile from './Profile';
import Archive from './Archive';
import Bookmarks from './Bookmarks';
import Settings from './Settings';
import Help from './Help';
import Search from './Search';
import Timetable from './Timetable';
import NewTimetable from './NewTimetable';
import DuplicateTimetable from './DuplicateTimetable';
import EditTimetable from './EditTimetable';

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppHeader({options, back, navigation}: NativeStackHeaderProps) {
  const {title, headerRight} = options;
  return (
    <Appbar.Header>
      {back ? (
        <Appbar.Action icon="arrow-left" onPress={navigation.goBack} />
      ) : null}
      <Appbar.Content title={title} />
      {headerRight?.({canGoBack: !!back})}
    </Appbar.Header>
  );
}

function MainStack() {
  const {isLoggedIn} = useAuth();
  const {t} = useTranslation();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: props => <AppHeader {...props} />,
      }}>
      {!isLoggedIn && <Stack.Screen name="Login" component={Login} />}
      <Stack.Screen
        name="Home"
        component={AppDrawer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Help"
        component={Help}
        options={{
          title: t('help.title'),
        }}
      />
      {isLoggedIn && (
        <>
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              title: t('profile.title'),
            }}
          />
          <Stack.Screen
            name="Bookmarks"
            component={Bookmarks}
            options={{
              title: t('bookmarks.title'),
            }}
          />
          <Stack.Screen
            name="Archive"
            component={Archive}
            options={{
              title: t('archive.title'),
            }}
          />
          <Stack.Screen
            name="CalendarSettings"
            component={Settings}
            options={{
              title: t('settings.title'),
            }}
          />
          <Stack.Screen
            name="ExploreSettings"
            component={Settings}
            options={{
              title: t('settings.title'),
            }}
          />
          <Stack.Screen
            name="NotificationSettings"
            component={Settings}
            options={{
              title: t('settings.title'),
            }}
          />
          <Stack.Screen
            name="Timetable"
            component={Timetable}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="NewTimetable"
            component={NewTimetable}
            options={{
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="EditTimetable"
            component={EditTimetable}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="DuplicateTimetable"
            component={DuplicateTimetable}
            options={{
              headerShown: false,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

export default MainStack;
