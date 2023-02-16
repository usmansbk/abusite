import React, {useMemo} from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {Drawer as PaperDrawer, ProgressBar} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {DrawerNavigationHelpers} from '@react-navigation/drawer/lib/typescript/src/types';
import useMe from '~hooks/api/useMe';
import useAuth from '~hooks/useAuth';
import {AppDrawerParamList} from '~types';
import Calendar from './Calendar';

const Drawer = createDrawerNavigator<AppDrawerParamList>();

function Timetables({navigation}: {navigation: DrawerNavigationHelpers}) {
  const {loading, me} = useMe();

  const items = useMemo(() => {
    if (me?.timetables) {
      return [...me!.timetables].sort((a, b) =>
        a!.title.localeCompare(b!.title),
      );
    }
    return [];
  }, [me?.timetables]);

  if (loading) {
    return <ProgressBar />;
  }

  if (!me?.timetables.length) {
    return null;
  }

  return (
    <PaperDrawer.Section>
      {items.map(timetable => (
        <PaperDrawer.Item
          key={timetable?.id}
          label={timetable!.title}
          icon="layout"
          onPress={() =>
            navigation.navigate('Timetable', {
              id: timetable?.id,
            })
          }
        />
      ))}
    </PaperDrawer.Section>
  );
}

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
    ],
    [],
  );

  const footerItems = useMemo(
    () => [
      {
        key: 'settings',
        icon: 'settings',
        label: t('drawer.settings'),
        onPress: () => navigation.navigate('Settings'),
      },
    ],
    [],
  );

  return (
    <DrawerContentScrollView {...props}>
      <PaperDrawer.Section>
        <PaperDrawer.Item
          active
          label={t('calendar.title')}
          icon="calendar"
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
      </PaperDrawer.Section>
      {isLoggedIn && <Timetables navigation={navigation} />}
      <PaperDrawer.Section showDivider={false}>
        {isLoggedIn &&
          footerItems.map(({key, label, onPress, icon}) => (
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
      initialRouteName="Calendar"
      drawerContent={AppDrawerContent}
      screenOptions={{
        drawerType: 'back',
        headerShown: false,
      }}>
      <Drawer.Screen name="Calendar" component={Calendar} />
    </Drawer.Navigator>
  );
}
