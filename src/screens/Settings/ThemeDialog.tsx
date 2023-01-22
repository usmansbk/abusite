import React, {useCallback, useMemo} from 'react';
import {useTranslation} from 'react-i18next';
import {Dialog, Portal, RadioButton} from 'react-native-paper';
import useThemeMode, {AppThemeMode} from '~hooks/useThemeMode';

interface Props {
  visible: boolean;
  onDismiss: () => void;
}

export default function ThemeDialog({visible, onDismiss}: Props) {
  const {t} = useTranslation();
  const {mode: value, setThemeMode} = useThemeMode();

  const modes = useMemo(
    () => [
      {
        mode: 'light',
        label: t('themes.light'),
      },
      {
        mode: 'dark',
        label: t('themes.dark'),
      },
      {
        mode: 'system',
        label: t('themes.system'),
      },
    ],
    [],
  );

  const onValueChange = useCallback((newValue: string) => {
    setThemeMode(newValue as AppThemeMode);
  }, []);

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Title>{t('dialogs.theme.title')}</Dialog.Title>
        <Dialog.Content>
          <RadioButton.Group
            onValueChange={onValueChange}
            value={value as string}>
            {modes.map(({mode, label}) => (
              <RadioButton.Item key={mode} value={mode} label={label} />
            ))}
          </RadioButton.Group>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
}
