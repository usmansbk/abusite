import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "react-native-paper";
import {
  GoogleSignin,
  statusCodes,
  NativeModuleError,
} from "@react-native-google-signin/google-signin";
import env from "~config/env";

GoogleSignin.configure({
  webClientId: env.googleWebClientId,
  offlineAccess: true,
});

export default function GoogleButton() {
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const handlePress = useCallback(async () => {
    setLoading(true);
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setLoading(false);
      console.log(userInfo);
    } catch (e) {
      setLoading(false);
      const error = e as NativeModuleError;
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
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
      onPress={handlePress}
    >
      {t("buttons.google")}
    </Button>
  );
}
