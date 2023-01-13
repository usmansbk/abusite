import React from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
import GoogleButton from "~components/GoogleButton";
import styles from "./styles";

export default function Login() {
  const { t } = useTranslation();
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.body}>
        <Text variant="headlineSmall">{t("login.pre")}</Text>
        <Text variant="displayLarge">{t("login.lectures")}</Text>
        <Text variant="displayLarge">{t("login.exams")}</Text>
        <Text variant="displayLarge">{t("login.tests")}</Text>
        <Text variant="displaySmall">{t("login.post")}</Text>
      </View>
      <GoogleButton />
    </ScrollView>
  );
}
