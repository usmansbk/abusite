import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "assets/locales";

const languageDetector = {
  type: "languageDetector",
  async: true,
  detect: (cb: any) => cb("en"),
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector as any)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18n;
