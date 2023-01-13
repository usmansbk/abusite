import React from "react";
import { useTranslation } from "react-i18next";
import Unauthenticated from "~components/Unauthenticated";

export default function Notifications() {
  const { t } = useTranslation();
  return (
    <Unauthenticated
      title={t("notifications.unauthenticated.title")}
      message={t("notifications.unauthenticated.message")}
    />
  );
}
