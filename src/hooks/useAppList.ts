import { useMemo } from 'react';
import { appList as appListEn } from '../features/action/app_en';
import { App } from '../features/action/types';
import { useCurrentLangauge } from './useCurrentLanguage';

export const useAppList = () => {
  const langauge = useCurrentLangauge();
  return useMemo(
    () =>
      langauge === 'vi'
        ? [...appListEn].sort(compareApps)
        : [...appListEn].sort(compareApps),
    [langauge],
  );
};

const compareApps = ({ name: name1 }: App, { name: name2 }: App) => {
  return name1.localeCompare(name2);
};
