import React from "react";
import { useTranslation } from "react-i18next";
import Unauthenticated from "~components/Unauthenticated";

export default function Explore() {
  const { t } = useTranslation();
  return (
    <Unauthenticated
      title={t("explore.unauthenticated.title")}
      message={t("explore.unauthenticated.message")}
    />
  );
}
