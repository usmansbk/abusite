import * as React from 'react';
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack';
import {Appbar} from 'react-native-paper';
import type {RootStackParamList} from '~types';
import useAuth from '~hooks/useAuth';
import HomeTabs from './HomeTabs';
import Login from './Login';

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
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: props => <AppHeader {...props} />,
      }}>
      {!isLoggedIn && <Stack.Screen name="Login" component={Login} />}
      <Stack.Screen
        name="Home"
        component={HomeTabs}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
