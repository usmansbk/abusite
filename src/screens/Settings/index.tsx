import React, {useCallback, useState} from 'react';
import {useTheme, Appbar} from 'react-native-paper';
import Container from '~components/Container';
import {RootStackScreenProps} from '~types';
import ThemeDialog from './ThemeDialog';

export default function Settings({
  navigation,
}: RootStackScreenProps<'Settings'>) {
  const {dark} = useTheme();
  const [themeDialogVisible, setOpenTheme] = useState(false);

  const closeThemeDialog = useCallback(() => {
    setOpenTheme(false);
  }, []);

  return (
    <Container>
      <Appbar>
        <Appbar.Action icon="arrow-left" onPress={navigation.goBack} />
        <Appbar.Content title="Settings" />
        <Appbar.Action
          icon={dark ? 'moon' : 'sun'}
          onPress={() => setOpenTheme(true)}
        />
      </Appbar>
      <ThemeDialog visible={themeDialogVisible} onDismiss={closeThemeDialog} />
    </Container>
  );
}
