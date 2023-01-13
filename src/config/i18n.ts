import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import resources from 'assets/locales';

const [locale] = RNLocalize.getLocales();

i18n.use(initReactI18next).init({
  resources,
  lng: locale.languageCode,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
