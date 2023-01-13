import React, {memo} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useTheme} from 'react-native-paper';
import Icon from '~components/Icon';
import useAuth from '~hooks/api/useAuth';
import type {HomeTabParamList} from '~types';
import Calendar from './Calendar';
import Explore from './Explore';
import Notifications from './Notifications';

const Tab = createMaterialBottomTabNavigator<HomeTabParamList>();

function HomeTabs() {
  const {colors} = useTheme();
  const {isLoggedIn} = useAuth();
  return (
    <Tab.Navigator
      initialRouteName={isLoggedIn ? 'Calendar' : 'Explore'}
      labeled={false}
      screenOptions={({route}) => ({
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
      })}
      barStyle={{
        height: 72,
        backgroundColor: colors.background,
      }}>
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  );
}

export default memo(HomeTabs);
