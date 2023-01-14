import React, {useCallback, useMemo, useState} from 'react';
import {FAB, Portal} from 'react-native-paper';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useIsFocused} from '@react-navigation/native';
import {useDrawerStatus} from '@react-navigation/drawer';
import Container from '~components/Container';
import EmptyState from '~components/EmptyState';
import styles from './styles';

export default function Timeline() {
  const isFocused = useIsFocused();
  const {t} = useTranslation();
  const drawerStatus = useDrawerStatus();

  const [open, setOpen] = useState(false);
  const onStateChange = useCallback((value: {open: boolean}) => {
    setOpen(value.open);
  }, []);

  const actions = useMemo(
    () => [
      {
        icon: 'list',
        label: t('buttons.timetable'),
        onPress: () => {},
      },
    ],
    [],
  );

  const handlePress = useCallback(() => {
    if (open) {
      console.log('Hello');
    }
  }, [open]);

  return (
    <Container>
      <View style={styles.container}>
        <EmptyState
          title={t('calendar.empty.title')}
          message={t('calendar.empty.message')}
        />
      </View>
      <Portal>
        <FAB.Group
          visible={isFocused && drawerStatus === 'closed'}
          open={open}
          icon={open ? 'edit-2' : 'plus'}
          style={styles.fab}
          onStateChange={onStateChange}
          onPress={handlePress}
          actions={actions}
        />
      </Portal>
    </Container>
  );
}
