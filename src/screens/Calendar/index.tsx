import React from "react";
import { useTranslation } from "react-i18next";
import Unauthenticated from "~components/Unauthenticated";

export default function Calendar() {
  const { t } = useTranslation();
  return (
    <Unauthenticated
      title={t("Track your events")}
      message={t("See what you've got coming up.")}
    />
  );
}
