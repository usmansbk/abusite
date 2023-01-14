import React, {useMemo} from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {Drawer as PaperDrawer} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import useAuth from '~hooks/useAuth';
import {AppDrawerParamList} from '~types';
import HomeTabs from './HomeTabs';

const Drawer = createDrawerNavigator<AppDrawerParamList>();

function AppDrawerContent(props: DrawerContentComponentProps) {
  const {t} = useTranslation();
  const {navigation} = props;

  const items = useMemo(
    () => [
      {
        key: 'profile',
        icon: 'user',
        label: t('drawer.profile'),
        onPress: () => navigation.navigate('Profile'),
      },
      {
        key: 'bookmarks',
        icon: 'bookmark',
        label: t('drawer.bookmarks'),
        onPress: () => navigation.navigate('Bookmarks'),
      },
      {
        key: 'archive',
        icon: 'archive',
        label: t('drawer.archive'),
        onPress: () => navigation.navigate('Archive'),
      },
      {
        key: 'help',
        icon: 'help-circle',
        label: t('drawer.help'),
        onPress: () => navigation.navigate('Help'),
      },
    ],
    [],
  );

  return (
    <DrawerContentScrollView {...props}>
      <PaperDrawer.Section>
        {items.map(({key, label, onPress, icon}) => (
          <PaperDrawer.Item
            key={key}
            label={label}
            icon={icon}
            onPress={onPress}
          />
        ))}
      </PaperDrawer.Section>
    </DrawerContentScrollView>
  );
}

export default function AppDrawer() {
  const {isLoggedIn} = useAuth();
  return (
    <Drawer.Navigator
      initialRouteName="HomeTabs"
      drawerContent={AppDrawerContent}
      screenOptions={{
        drawerType: 'slide',
        headerShown: false,
        swipeEnabled: isLoggedIn,
      }}>
      <Drawer.Screen name="HomeTabs" component={HomeTabs} />
    </Drawer.Navigator>
  );
}
