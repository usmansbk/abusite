import React, {useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Button} from 'react-native-paper';
import {
  GoogleSignin,
  statusCodes,
  NativeModuleError,
} from '@react-native-google-signin/google-signin';
import useSocialLogin from '~hooks/api/useSocialLogin';
import {SocialProvider} from '~graphql/__generated__/graphql';
import env from '~config/env';
import {useToast} from './Toast';

GoogleSignin.configure({
  webClientId: env.googleWebClientId,
  offlineAccess: true,
});

export default function GoogleButton() {
  const [loading, setLoading] = useState(false);
  const {login} = useSocialLogin();
  const {t} = useTranslation();
  const toast = useToast();

  const handlePress = useCallback(async () => {
    setLoading(true);
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signOut();
      const userInfo = await GoogleSignin.signIn();
      await login({
        provider: SocialProvider.Google,
        code: userInfo.idToken!,
      });
    } catch (e) {
      setLoading(false);
      const error = e as NativeModuleError;
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        toast.show(t('errors.login.cancelled'));
      } else if (error.code === statusCodes.IN_PROGRESS) {
        toast.show(t('errors.login.logging'));
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        toast.show(t('errors.login.no_play_services'));
      } else {
        toast.show(t('errors.login.failed'));
      }
    }
  }, []);

  return (
    <Button
      loading={loading}
      disabled={loading}
      mode="contained"
      buttonColor="#4285F4"
      textColor="#ffffff"
      onPress={handlePress}>
      {t('buttons.google')}
    </Button>
  );
}
