import { defaultLocale, messages } from './config';

export function useLanguage() {
  return {
    text: messages[defaultLocale],
  };
}
