// src/i18n/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './translations/en.json';
import hiTranslation from './translations/hi.json';
import esTranslation from './translations/es.json'; // Import Spanish translations

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    hi: {
      translation: hiTranslation,
    },
    es: { // Add Spanish translations
      translation: esTranslation,
    },
  },
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
