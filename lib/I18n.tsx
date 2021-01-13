import { createContext, useContext } from 'react'
import en from '~/i18n/en'

const messages = {
  en
}

const defaultI18nContext = {
  locale: 'en',
  messages: messages.en
}

const I18nContext = createContext(defaultI18nContext)

export const useI18n = () => useContext(I18nContext)

interface Props {
  locale: 'en'
}

export const I18nProvider: React.FunctionComponent<Props> = ({ locale, children }) => (
  <I18nContext.Provider value={{ locale, messages: messages[locale] }}>
    {children}
  </I18nContext.Provider>
)