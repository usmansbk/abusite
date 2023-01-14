import React, {useMemo} from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {Drawer as PaperDrawer} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {AppDrawerParamList} from '~types';
import HomeTabs from './HomeTabs';

const Drawer = createDrawerNavigator<AppDrawerParamList>();

function AppDrawerContent(props: DrawerContentComponentProps) {
  const {t} = useTranslation();

  const items = useMemo(
    () => [
      {
        key: 'profile',
        icon: 'user',
        label: t('drawer.profile'),
        onPress: () => {},
      },
      {
        key: 'bookmarks',
        icon: 'bookmark',
        label: t('drawer.bookmarks'),
        onPress: () => {},
      },
      {
        key: 'archive',
        icon: 'archive',
        label: t('drawer.archive'),
        onPress: () => {},
      },
      {
        key: 'settings',
        icon: 'settings',
        label: t('drawer.settings'),
        onPress: () => {},
      },
      {
        key: 'help',
        icon: 'help-circle',
        label: t('drawer.help'),
        onPress: () => {},
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
