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
import Event from './Event';

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppHeader({options, back, navigation}: NativeStackHeaderProps) {
  const {title, headerRight} = options;
  return (
    <Appbar.Header mode="center-aligned">
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
      <Stack.Group
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={AppDrawer} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Group>
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
          <Stack.Group
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Event" component={Event} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Timetable" component={Timetable} />
            <Stack.Screen name="NewTimetable" component={NewTimetable} />
            <Stack.Screen name="EditTimetable" component={EditTimetable} />
            <Stack.Screen
              name="DuplicateTimetable"
              component={DuplicateTimetable}
            />
          </Stack.Group>
        </>
      )}
    </Stack.Navigator>
  );
}

export default MainStack;
