// import the original type declarations
import 'i18next';
// import all namespaces (for the default language, only)
import * as vi from '../i18n/vi';

// react-i18next versions higher than 11.11.0
declare module 'i18next' {
  // and extend them!
  interface CustomTypeOptions {
    resources: {
      custom: typeof vi.custom;
      setting: typeof vi.setting;
      appList: typeof vi.appList;
      paramActionList: typeof vi.paramActionList;
      statistics: typeof vi.statistics;
      gesture: typeof vi.gesture;
      help: typeof vi.help;
      updateProgress: typeof vi.updateProgress;
    };
  }
}
