//
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./assets/trans/en.json";
import fr from "./assets/trans/fr.json";
import nl from "./assets/trans/nl.json";
import de from "./assets/trans/de.json";

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
  nl: {
    translation: nl,
  },
  de: {
    translation: de,
  },
};

i18n
  .use(LanguageDetector)
  //.use(HttpApi)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: ["en", "nl", "fr", "de"],
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },

    // backend: {
    //   loadPath: "/assets/translations/{{lng}}.json",
    // },

    //react: { useSuspense: false },
  });

export default i18n;
