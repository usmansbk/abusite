import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Appbar, useTheme} from 'react-native-paper';
import Container from '~components/Container';
import Unauthenticated from '~components/Unauthenticated';
import useAuth from '~hooks/useAuth';
import {HomeTabScreenProps} from '~types';
import Timeline from './Timeline';
import ThemeDialog from './ThemeDialog';

export default function Calendar({navigation}: HomeTabScreenProps<'Calendar'>) {
  const {t} = useTranslation();
  const {dark} = useTheme();
  const {isLoggedIn} = useAuth();
  const [openTheme, setOpenTheme] = useState(false);

  return (
    <Container>
      <Appbar>
        <Appbar.Action icon="menu" onPress={navigation.openDrawer} />
        <Appbar.Content title="" />
        <Appbar.Action
          icon={dark ? 'moon' : 'sun'}
          onPress={() => setOpenTheme(true)}
        />
        <Appbar.Action
          disabled={!isLoggedIn}
          icon="settings"
          onPress={() => navigation.navigate('CalendarSettings')}
        />
      </Appbar>
      {isLoggedIn ? (
        <Timeline />
      ) : (
        <Unauthenticated
          title={t('calendar.unauthenticated.title')}
          message={t('calendar.unauthenticated.message')}
        />
      )}
      <ThemeDialog visible={openTheme} onDismiss={() => setOpenTheme(false)} />
    </Container>
  );
}
