import React, {useCallback, useMemo, useState} from 'react';
import {FAB, Portal} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {useIsFocused} from '@react-navigation/native';
import {useDrawerStatus} from '@react-navigation/drawer';
import Container from '~components/Container';
import EmptyState from '~components/EmptyState';
import TimetableCalendar from '~components/TimetableCalendar';
import styles from './styles';

interface Props {
  openDrawer: () => void;
}

export default function Timeline({openDrawer}: Props) {
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
      <TimetableCalendar onPressMenu={openDrawer} />
      <EmptyState
        title={t('calendar.empty.title')}
        message={t('calendar.empty.message')}
      />
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
