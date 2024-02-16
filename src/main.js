import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/UI'
import store from '@/store'

import { languages } from './i18n'
import { defaultLocale } from './i18n'
import { createI18n, useI18n } from 'vue-i18n'
const messages = Object.assign(languages)
const localeStorageLang = localStorage.getItem('lang')
const i18n = createI18n({
  legacy: false,
  locale: localeStorageLang || defaultLocale,
  fallbackLocale: 'ru',
  messages: messages
})

const app = createApp(App, {
  setup(props) {
    const { t } = useI18n()
    return { t }
  }
})

components.forEach((component) => {
  app.component(component.name, component)
})

app.use(store).use(i18n).mount('#app')
