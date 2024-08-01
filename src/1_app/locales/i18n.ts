import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import * as en from "./en";
import * as ko from "./ko";

const resources = { en, ko };

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",

  debug: false,
  keySeparator: ".",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
