import { computed } from 'vue'
import { useData } from 'vitepress'

export function useI18n<T>(translations: Record<string, T>) {
  const { lang } = useData()

  const locale = computed<string>(() => {
    const lv = (lang.value || '').toLowerCase()
    if (/^zh-(hant|tw|hk|mo)$/.test(lv)) return 'zh-hant'
    if (lv.startsWith('zh')) return 'zh'
    if (lv.startsWith('ja')) return 'ja'
    if (lv.startsWith('ko')) return 'ko'
    if (lv.startsWith('de')) return 'de'
    if (lv.startsWith('fr')) return 'fr'
    if (lv.startsWith('ru')) return 'ru'
    return 'en'
  })

  const t = computed<T>(() => {
    return (translations[locale.value] ??
      translations['en'] ??
      Object.values(translations)[0]) as T
  })

  return { locale, t }
}
