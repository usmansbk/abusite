import React from "react";
import { useTranslation } from "react-i18next";
import Unauthenticated from "~components/Unauthenticated";

export default function Notifications() {
  const { t } = useTranslation();
  return (
    <Unauthenticated
      title={t("Stay in the loop")}
      message={t("Get notified when an event is updated.")}
    />
  );
}
