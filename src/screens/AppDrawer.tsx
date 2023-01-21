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
  const {isLoggedIn} = useAuth();
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
      // {
      //   key: 'archive',
      //   icon: 'archive',
      //   label: t('drawer.archive'),
      //   onPress: () => navigation.navigate('Archive'),
      // },
    ],
    [],
  );

  return (
    <DrawerContentScrollView {...props}>
      <PaperDrawer.Section>
        <PaperDrawer.Item
          active
          label={t('drawer.home')}
          icon="home"
          onPress={navigation.goBack}
        />
        {isLoggedIn &&
          items.map(({key, label, onPress, icon}) => (
            <PaperDrawer.Item
              key={key}
              label={label}
              icon={icon}
              onPress={onPress}
            />
          ))}
        <PaperDrawer.Item
          label={t('drawer.help')}
          icon="help-circle"
          onPress={() => navigation.navigate('Help')}
        />
      </PaperDrawer.Section>
    </DrawerContentScrollView>
  );
}

export default function AppDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeTabs"
      drawerContent={AppDrawerContent}
      screenOptions={{
        drawerType: 'slide',
        headerShown: false,
      }}>
      <Drawer.Screen name="HomeTabs" component={HomeTabs} />
    </Drawer.Navigator>
  );
}
