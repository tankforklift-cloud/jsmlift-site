/**
 * i18n Utility — Translation helper for MLIFT multi-language support.
 * Supports: en, es, fr, ar, ru, pt
 */

export type Locale = 'en' | 'es' | 'fr' | 'ar' | 'ru' | 'pt';

export const locales: Locale[] = ['en', 'es', 'fr', 'ar', 'ru', 'pt'];

export const defaultLocale: Locale = 'en';

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  ar: 'العربية',
  ru: 'Русский',
  pt: 'Português',
};

export const localeDirections: Record<Locale, 'ltr' | 'rtl'> = {
  en: 'ltr',
  es: 'ltr',
  fr: 'ltr',
  ar: 'rtl',
  ru: 'ltr',
  pt: 'ltr',
};

/**
 * Get the UI translations for a given locale.
 * Falls back to English if locale file missing.
 */
export async function getUI(locale: Locale) {
  try {
    const mod = await import(`./ui/${locale}.json`);
    return mod.default;
  } catch {
    const mod = await import('./ui/en.json');
    return mod.default;
  }
}

/**
 * Resolve a locale from a URL pathname.
 * e.g. "/es/products" → "es", "/products" → "en"
 */
export function getLocaleFromPath(pathname: string): Locale {
  const seg = pathname.split('/')[1];
  if (locales.includes(seg as Locale) && seg !== defaultLocale) {
    return seg as Locale;
  }
  return defaultLocale;
}

/**
 * Get the path prefix for a locale.
 * en → '' (default), es → '/es', fr → '/fr', etc.
 */
export function localePath(locale: Locale): string {
  return locale === defaultLocale ? '' : `/${locale}`;
}

/**
 * Translate a URL path to another locale.
 */
export function translatePath(pathname: string, targetLocale: Locale): string {
  // Remove existing locale prefix if any
  let cleanPath = pathname;
  for (const loc of locales) {
    if (loc !== defaultLocale && pathname.startsWith(`/${loc}/`)) {
      cleanPath = pathname.slice(`/${loc}`.length);
      break;
    }
    if (loc !== defaultLocale && pathname === `/${loc}`) {
      cleanPath = '/';
      break;
    }
  }
  // Add new locale prefix
  if (targetLocale === defaultLocale) {
    return cleanPath || '/';
  }
  return `/${targetLocale}${cleanPath}`;
}
