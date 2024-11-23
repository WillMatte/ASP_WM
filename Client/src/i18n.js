import { createI18n } from 'vue-i18n'
import Cookies from 'js-cookie'
import en from './locales/en.json'
import fr from './locales/fr.json'

if (!Cookies.get('locale')) Cookies.set('locale', 'fr', { expires: 365 })
const savedLanguage = Cookies.get('locale')

const i18n = createI18n({
  locale: savedLanguage,
  fallbackLocale: 'en',
  messages: {
    en,
    fr,
  },
})

export default i18n
