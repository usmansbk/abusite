import React, {useCallback, useState} from 'react';
import {List, useTheme} from 'react-native-paper';
import Container from '~components/Container';
import ThemeDialog from './ThemeDialog';

export default function Settings() {
  const {dark} = useTheme();
  const [themeDialogVisible, setOpenTheme] = useState(false);

  const closeThemeDialog = useCallback(() => {
    setOpenTheme(false);
  }, []);

  return (
    <Container>
      <List.Section title="General">
        <List.Item
          left={props => <List.Icon {...props} icon={dark ? 'moon' : 'sun'} />}
          title="Theme"
          onPress={() => setOpenTheme(true)}
        />
      </List.Section>
      <ThemeDialog visible={themeDialogVisible} onDismiss={closeThemeDialog} />
    </Container>
  );
}
