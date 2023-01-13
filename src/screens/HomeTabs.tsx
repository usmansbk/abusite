import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {
  createMaterialBottomTabNavigator,
  MaterialBottomTabNavigationOptions,
} from '@react-navigation/material-bottom-tabs';
import Icon from '~components/Icon';
import useAuth from '~hooks/useAuth';
import type {HomeTabParamList} from '~types';
import Calendar from './Calendar';
import Explore from './Explore';
import Notifications from './Notifications';

const Tab = createMaterialBottomTabNavigator<HomeTabParamList>();

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: 'transparent',
  },
});

export default function HomeTabs() {
  const {isLoggedIn} = useAuth();

  const screenOptions = useCallback(
    ({
      route,
    }: {
      route: RouteProp<HomeTabParamList>;
    }): MaterialBottomTabNavigationOptions => ({
      tabBarIcon: ({color}) => {
        let iconName;

        if (route.name === 'Calendar') {
          iconName = 'calendar';
        } else if (route.name === 'Notifications') {
          iconName = 'bell';
        } else if (route.name === 'Explore') {
          iconName = 'search';
        } else {
          iconName = '' as never;
        }

        return <Icon name={iconName} size={24} color={color} />;
      },
    }),
    [],
  );

  return (
    <Tab.Navigator
      initialRouteName={isLoggedIn ? 'Calendar' : 'Explore'}
      screenOptions={screenOptions}
      barStyle={styles.barStyle}>
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  );
}
