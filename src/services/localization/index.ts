import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import * as vi from './vi.json';

const resources = {
  vi: {translation: vi},
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'vi',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
  compatibilityJSON: 'v3',
});

export default i18n;
