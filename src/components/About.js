import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div className="content">
      <h1 className="title">{t('about.title')}</h1>
      <p className="description">{t('about.content')}</p>
      <p>
        {t('about.additional1')} <em>{t('about.emphasizedText')}</em> {t('about.additional2')}
      </p>
    </div>
  );
}

export default About;
