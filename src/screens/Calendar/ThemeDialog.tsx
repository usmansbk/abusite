import React, {useMemo} from 'react';
import {useTranslation} from 'react-i18next';
import {Dialog, Portal, RadioButton} from 'react-native-paper';

interface Props {
  visible: boolean;
  onDismiss: () => void;
}

export default function ThemeDialog({visible, onDismiss}: Props) {
  const {t} = useTranslation();
  const [value, setValue] = React.useState('light');

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

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Title>{t('dialogs.theme.title')}</Dialog.Title>
        <Dialog.Content>
          <RadioButton.Group onValueChange={val => setValue(val)} value={value}>
            {modes.map(({mode, label}) => (
              <RadioButton.Item key={mode} value={mode} label={label} />
            ))}
          </RadioButton.Group>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
}
