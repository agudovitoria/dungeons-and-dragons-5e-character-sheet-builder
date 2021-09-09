import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  LANGUAGE_EN,
  LANGUAGE_ES
} from '../state/globalContext';

export const LanguageSelector = () => {
  const [, i18n] = useTranslation('common');
  return (
    <div className="language-toolbar">
      <button onClick={() => i18n.changeLanguage(LANGUAGE_EN)}>en</button>
      <button onClick={() => i18n.changeLanguage(LANGUAGE_ES)}>es</button>
    </div>
  );
}