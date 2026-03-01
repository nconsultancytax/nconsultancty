import en from './en.json'
import ta from './ta.json'
import { contact } from '../data/contact'

export type Lang = 'en' | 'ta'

const translations: Record<Lang, Record<string, unknown>> = { en, ta }

/**
 * Get the current language from URL param or localStorage.
 * Server-side always returns 'en'.
 */
export function getLang(): Lang {
  if (typeof window === 'undefined') return 'en'
  const param = new URLSearchParams(window.location.search).get('lang') as Lang | null
  const stored = localStorage.getItem('nacctax_lang') as Lang | null
  return param || stored || 'en'
}

/**
 * Translate a dot-notated key, e.g. t('hero.h1')
 * Falls back to the key itself if not found.
 */
export function t(key: string, lang?: Lang): string {
  const activeLang = lang || getLang()
  const strings = translations[activeLang]
  const value = key.split('.').reduce((obj: unknown, k: string) => {
    if (obj && typeof obj === 'object') return (obj as Record<string, unknown>)[k]
    return undefined
  }, strings)
  return typeof value === 'string' ? value : key
}

/**
 * Build a WhatsApp deep-link URL with pre-filled message.
 */
export function getWhatsAppUrl(lang: Lang = 'en'): string {
  const messages: Record<Lang, string> = {
    en: 'Hi N Accounts, I am interested in your services.',
    ta: '\u0bb5\u0ba3\u0b95\u0bcd\u0b95\u0bae\u0bcd N Accounts, \u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b9a\u0bc7\u0bb5\u0bc8\u0b95\u0bb3\u0bbf\u0bb2\u0bcd \u0b8e\u0ba9\u0b95\u0bcd\u0b95\u0bc1 \u0b86\u0bb0\u0bcd\u0bb5\u0bae\u0bcd \u0b89\u0bb3\u0bcd\u0bb3\u0ba4\u0bc1.',
  }
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(messages[lang])}`
}
