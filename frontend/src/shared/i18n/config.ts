import { en } from './locales';

export const messages = {
  en,
} as const;

export type Locale = keyof typeof messages;
export const defaultLocale: Locale = 'en';
