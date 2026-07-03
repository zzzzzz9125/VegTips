import type MarkdownIt from 'markdown-it'

/**
 * VitePress / Markdown-it macro preprocessor for multilingual content.
 *
 * ## Supported Locales
 *
 * 8 locale tags: `en`, `zh`, `zh-hant`, `ja`, `ko`, `de`, `fr`, `ru`.
 * The active locale comes from VitePress's `state.env.localeIndex`.
 * `'root'` is mapped to `'en'`; `zh-Hans` is simplified to `zh`.
 *
 * ## Syntax 1 — Block-Level (`@@@`)
 *
 * For multi-paragraph content. All languages in a cluster are enclosed
 * in a single `@@@...@@@` wrapper.
 *
 * ```
 * @@@en
 * English content (multiple paragraphs, **markdown**, code blocks)
 * @@@zh
 * 中文内容（可跨多段，包含 **Markdown**）
 * @@@zh-hant
 * 繁體中文內容
 * @@@ja
 * 日本語の内容
 * @@@ko
 * 한국어 콘텐츠
 * @@@de
 * Deutscher Inhalt
 * @@@fr
 * Contenu français
 * @@@ru
 * Русский контент
 * @@@
 * ```
 *
 * Rules:
 * - Opening tag `@@@lang` on its own line; closing `@@@` ends the cluster.
 * - Content continues until the next `@@@...` marker.
 * - Tags match `[\w-]+` (word characters + hyphens).
 * - Any subset of locales may be present.
 * - Fallback: current locale → English → first available language.
 *
 * ## Syntax 2 — Line-Level (`@lang`)
 *
 * For short single-line segments. Consecutive lines starting with
 * `@lang text` form a "cluster". A cluster is flushed (resolved) when
 * a non-`@` line appears, or when the same language tag repeats.
 *
 * ```
 * @en # VEGAS Pro Video FX List
 * @zh # VEGAS Pro 视频 FX 效果列表
 * @ja # VEGAS Pro ビデオ FX リスト
 *
 * @en ## Notes
 * @zh ## 说明
 * @ja ## 注記
 *
 * 1. @en First bullet with shared prefix
 *    @zh 第一项，共享前缀
 *    @ja 最初の項目
 * ```
 *
 * Rules:
 * - Pattern: `@lang text` at line start (after optional shared prefix).
 * - Tags match `[\w-]+`.
 * - Fallback: same as block syntax.
 * - Inline markdown (`**bold**`, `` `code` ``) is supported in the text.
 */
export default function i18nMacroPlugin(md: MarkdownIt) {
  md.core.ruler.before('block', 'i18n_macro_preprocessor', state => {
    let currentLang = state.env.localeIndex || 'en'
    // VitePress uses 'root' for the base locale
    if (currentLang === 'root') currentLang = 'en'

    const locale = parseLocale(currentLang)
    if (locale?.language === 'zh') {
      if (locale?.script === 'Hans') currentLang = 'zh'
    }

    let src = state.src

    // 1. Block multi-language (@@@)
    if (src.includes('@@@')) {
      const blockClusterRegex = /(?:@@@[\w-]+\n[\s\S]*?\n)+@@@/g

      src = src.replace(blockClusterRegex, cluster => {
        const blockRegex = /@@@([\w-]+)\n([\s\S]*?)(?=\n@@@|\n@@@[\w-]+)/g
        const languagesData = {} as Record<string, string>
        let match

        while ((match = blockRegex.exec(cluster)) !== null) {
          languagesData[match[1]] = match[2]
        }

        if (languagesData[currentLang] !== undefined) return languagesData[currentLang]
        if (languagesData['en'] !== undefined) return languagesData['en']
        return Object.values(languagesData)[0] || ''
      })
    }

    // 2. Line-level multi-language (@)
    if (src.includes('@')) {
      const lines = src.split('\n')
      const newLines: string[] = []

      let currentCluster = null as Record<string, string> | null

      const flushCluster = (cluster: Record<string, string> | null) => {
        if (!cluster) return
        if (cluster[currentLang] !== undefined) {
          newLines.push(cluster[currentLang])
        } else if (cluster['en'] !== undefined) {
          newLines.push(cluster['en'])
        } else {
          newLines.push(Object.values(cluster)[0] || '')
        }
      }

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i]
        const match = line.trim().match(/^@([\w-]+) (.*)$/)

        if (match) {
          const lang = match[1]
          const text = match[2]

          if (!currentCluster) {
            currentCluster = {}
          } else if (currentCluster[lang] !== undefined) {
            // Same language repeats — flush previous cluster, start new
            flushCluster(currentCluster)
            currentCluster = {}
          }

          currentCluster[lang] = text
        } else {
          // Non-macro line — flush any pending cluster
          if (currentCluster) {
            flushCluster(currentCluster)
            currentCluster = null
          }
          newLines.push(line)
        }
      }

      if (currentCluster) {
        flushCluster(currentCluster)
      }

      src = newLines.join('\n')
    }

    state.src = src
  })
}

function parseLocale(tag: Intl.UnicodeBCP47LocaleIdentifier | Intl.Locale) {
  try {
    return new Intl.Locale(tag).maximize()
  } catch {
    return null
  }
}
