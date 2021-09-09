
import { createContext } from 'react';

export const LANGUAGE_EN = 'en';
export const LANGUAGE_ES = 'es';

export const initialState = {
  lang: LANGUAGE_EN
};

export default createContext();