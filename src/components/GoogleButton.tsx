import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "react-native-paper";

export default function GoogleButton() {
  const { t } = useTranslation();
  return (
    <Button
      mode="contained"
      buttonColor="#4285F4"
      textColor="#ffffff"
      onPress={() => null}
    >
      {t("buttons.google")}
    </Button>
  );
}
