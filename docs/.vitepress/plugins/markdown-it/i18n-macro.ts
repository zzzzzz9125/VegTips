import type MarkdownIt from 'markdown-it'

/**
 * VitePress / Markdown-it macro preprocessor for multilingual content.
 * Supports block syntax (@@@) and line-level syntax (@lang text).
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
