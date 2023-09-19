import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <div className="content">
      <h1 className="title">{t('home.title')}</h1>
      <p className="description">{t('home.content')}</p>
      <p>
        {t('home.additional1')} <strong>{t('home.strongText')}</strong> {t('home.additional2')}
      </p>
    </div>
  );
}

export default Home;
