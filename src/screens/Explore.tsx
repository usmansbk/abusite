import React from "react";
import { useTranslation } from "react-i18next";
import Unauthenticated from "~components/Unauthenticated";

export default function Explore() {
  const { t } = useTranslation();
  return (
    <Unauthenticated
      title={t("What's happening?")}
      message={t("Discover new events happening around you.")}
    />
  );
}
