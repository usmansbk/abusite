import React from "react";
import { useTranslation } from "react-i18next";
import Unauthenticated from "~components/Unauthenticated";

export default function Calendar() {
  const { t } = useTranslation();
  return (
    <Unauthenticated
      title={t("calendar.unauthenticated.title")}
      message={t("calendar.unauthenticated.message")}
    />
  );
}
