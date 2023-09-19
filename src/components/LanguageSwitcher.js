// LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="language-switcher">
      <span className="selected-language">{i18n.language.toUpperCase()}</span>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('hi')}>हिन्दी</button>
      <button onClick={() => changeLanguage('es')}>Español</button> {/* Add Spanish button */}
    </div>
  );
}

export default LanguageSwitcher;
