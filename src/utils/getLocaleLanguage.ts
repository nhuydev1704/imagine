import { getLocales } from 'react-native-localize';
import { Language } from '../store/slices';

export const getLocaleLanguage = (): Exclude<Language, 'locale'> => {
  console.log(
    '🚀 ~ getLocaleLanguage ~ getLocales()[0].languageCode:',
    getLocales()[0].languageCode,
  );
  return getLocales()[0].languageCode === 'vi' ? 'vi' : 'eng';
};
