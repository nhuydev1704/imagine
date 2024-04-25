import i18n, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { store } from '../store';
import { getLocaleLanguage } from '../utils';
import * as en from './en';
import * as vi from './vi';

const resources: Resource = {
  en: {
    ...en,
  },
  vi: {
    ...vi,
  },
} as const;

export const initI18n = () => {
  const settingLanguage = store.getState().setting.language;
  const language =
    settingLanguage === 'locale' ? getLocaleLanguage() : settingLanguage;
  const lng = language === 'vi' ? 'vi' : 'en';

  i18n.use(initReactI18next).init({
    resources,
    lng,
    fallbackLng: 'en',
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    },
    compatibilityJSON: 'v3',
  });
};

export default i18n;
