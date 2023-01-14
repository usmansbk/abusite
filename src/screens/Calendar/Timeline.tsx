import React, {useCallback, useState} from 'react';
import Container from '~components/Container';
import {FAB, Portal, Text} from 'react-native-paper';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useIsFocused} from '@react-navigation/native';
import styles from './styles';

export default function Timeline() {
  const isFocused = useIsFocused();
  const {t} = useTranslation();
  const [open, setOpen] = useState(false);
  const onStateChange = useCallback((value: {open: boolean}) => {
    setOpen(value.open);
  }, []);
  const handlePress = useCallback(() => {
    if (open) {
      console.log('Hello');
    }
  }, [open]);

  return (
    <Container>
      <View style={styles.container}>
        <Text>Calendar</Text>
        <Portal>
          <FAB.Group
            visible={isFocused}
            open={open}
            icon={open ? 'edit-2' : 'plus'}
            style={styles.fab}
            onStateChange={onStateChange}
            onPress={handlePress}
            actions={[
              {
                icon: 'list',
                label: t('buttons.timetable'),
                onPress: () => {},
              },
            ]}
          />
        </Portal>
      </View>
    </Container>
  );
}
