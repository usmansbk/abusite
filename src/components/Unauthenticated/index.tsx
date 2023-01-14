import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScrollView, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import styles from './styles';

interface Props {
  title: string;
  message: string;
}

export default function Unauthenticated({title, message}: Props) {
  const {t} = useTranslation();
  const navigation = useNavigation();

  const handlePress = useCallback(() => {
    navigation.navigate('Login');
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.body}>
        <Text variant="displaySmall">{title}</Text>
        <Text style={styles.gap}>{message}</Text>
      </View>
      <View style={styles.footer}>
        <Button onPress={handlePress} mode="contained">
          {t('buttons.login')}
        </Button>
      </View>
    </ScrollView>
  );
}
