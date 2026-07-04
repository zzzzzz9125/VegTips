import { defineConfig } from 'vitepress'
import i18nMacroPlugin from './plugins/markdown-it/i18n-macro'

const readTheDocsCanonicalUrl = process.env.READTHEDOCS_CANONICAL_URL

function getReadTheDocsBase() {
  if (!readTheDocsCanonicalUrl) {
    return undefined
  }

  try {
    const pathname = new URL(readTheDocsCanonicalUrl).pathname
    if (!pathname || pathname === '/') {
      return '/'
    }

    return pathname.endsWith('/') ? pathname : `${pathname}/`
  } catch {
    return undefined
  }
}

const isReadTheDocs = Boolean(process.env.READTHEDOCS)
const base = process.env.GITHUB_ACTIONS ? '/VegTips/' : (getReadTheDocsBase() ?? '/')

type LocaleKey = 'en' | 'zh' | 'zh-hant' | 'ja' | 'ko' | 'de' | 'fr' | 'ru'
type LocaleText = Record<LocaleKey, string>

function localeText(item: LocaleText, locale: string): string {
  return (item as Record<string, string>)[locale] ?? item.en
}

const navTemplate: Array<LocaleText & { link: string }> = [
  {
    en: 'Vegas Troubleshooting', zh: 'Vegas 疑难杂症', 'zh-hant': 'Vegas 疑難雜症',
    ja: 'Vegas トラブルシューティング', ko: 'Vegas 문제 해결', de: 'Vegas Fehlerbehebung',
    fr: 'Vegas Dépannage', ru: 'Vegas Устранение неполадок', link: '/'
  },
  {
    en: 'Video FX List', zh: '视频 FX 效果列表', 'zh-hant': '影片 FX 效果列表',
    ja: 'ビデオ FX リスト', ko: 'Video FX 목록', de: 'Video‑FX‑Liste',
    fr: 'Liste des FX vidéo', ru: 'Список видеоэффектов', link: '/videofxlist'
  },
  {
    en: 'UltraPaste! Extension', zh: '超级粘贴! 扩展', 'zh-hant': 'UltraPaste! 擴充套件',
    ja: 'UltraPaste! 拡張機能', ko: 'UltraPaste! 확장', de: 'UltraPaste! Erweiterung',
    fr: 'UltraPaste! Extension', ru: 'Расширение UltraPaste!', link: '/ultrapaste'
  },
  {
    en: 'Script API', zh: '脚本 API', 'zh-hant': '指令碼 API',
    ja: 'スクリプト API', ko: '스크립트 API', de: 'Skript-API',
    fr: 'API de script', ru: 'Скриптовый API', link: '/scriptapi'
  }
]

const sidebarTemplate: Array<LocaleText & { items: Array<LocaleText & { link: string }> }> = [
  {
    en: 'Articles', zh: '文章', 'zh-hant': '文章',
    ja: '記事', ko: '문서', de: 'Artikel', fr: 'Articles', ru: 'Материалы',
    items: [
      { ...navTemplate[0] },
      { ...navTemplate[1] },
      { ...navTemplate[2] },
      { ...navTemplate[3] }
    ]
  }
]

function navForLocale(locale: string) {
  const prefix = locale === 'root' ? '' : `/${locale}`
  return navTemplate.map(item => ({
    text: localeText(item, locale),
    link: prefix + item.link
  }))
}

function sidebarForLocale(locale: string) {
  const prefix = locale === 'root' ? '' : `/${locale}`
  return sidebarTemplate.map(group => ({
    text: localeText(group, locale),
    items: group.items.map(item => ({
      text: localeText(item, locale),
      link: prefix + item.link
    }))
  }))
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // Read the Docs static hosting does not guarantee rewrite rules for extensionless URLs.
  cleanUrls: !isReadTheDocs,
  base,
  vite: {
    publicDir: '../public'
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'VegTips',
      description: 'Some practical tips for VEGAS Pro',
      themeConfig: {
        nav: navForLocale('root'),
        sidebar: sidebarForLocale('root')
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'VegTips',
      description: 'VEGAS Pro 的实用技巧',
      link: '/zh/',
      themeConfig: {
        nav: navForLocale('zh'),
        sidebar: sidebarForLocale('zh'),
        outlineTitle: '页面导航',
        docFooter: {
          prev: '上一页',
          next: '下一页'
        }
      }
    },
    'zh-hant': {
      label: '繁體中文',
      lang: 'zh-Hant',
      title: 'VegTips',
      description: 'VEGAS Pro 的實用技巧',
      link: '/zh-hant/',
      themeConfig: {
        nav: navForLocale('zh-hant'),
        sidebar: sidebarForLocale('zh-hant'),
        outlineTitle: '頁面導覽',
        docFooter: {
          prev: '上一頁',
          next: '下一頁'
        }
      }
    },
    ja: {
      label: '日本語',
      lang: 'ja-JP',
      title: 'VegTips',
      description: 'VEGAS Pro の実用的なヒント',
      link: '/ja/',
      themeConfig: {
        nav: navForLocale('ja'),
        sidebar: sidebarForLocale('ja'),
        outlineTitle: 'ページナビゲーション',
        docFooter: {
          prev: '前へ',
          next: '次へ'
        }
      }
    },
    ko: {
      label: '한국어',
      lang: 'ko-KR',
      title: 'VegTips',
      description: 'VEGAS Pro 실용 팁',
      link: '/ko/',
      themeConfig: {
        nav: navForLocale('ko'),
        sidebar: sidebarForLocale('ko'),
        outlineTitle: '페이지 탐색',
        docFooter: {
          prev: '이전',
          next: '다음'
        }
      }
    },
    de: {
      label: 'Deutsch',
      lang: 'de-DE',
      title: 'VegTips',
      description: 'Praktische Tipps für VEGAS Pro',
      link: '/de/',
      themeConfig: {
        nav: navForLocale('de'),
        sidebar: sidebarForLocale('de'),
        outlineTitle: 'Seitennavigation',
        docFooter: {
          prev: 'Zurück',
          next: 'Weiter'
        }
      }
    },
    fr: {
      label: 'Français',
      lang: 'fr-FR',
      title: 'VegTips',
      description: 'Astuces pratiques pour VEGAS Pro',
      link: '/fr/',
      themeConfig: {
        nav: navForLocale('fr'),
        sidebar: sidebarForLocale('fr'),
        outlineTitle: 'Navigation de page',
        docFooter: {
          prev: 'Précédent',
          next: 'Suivant'
        }
      }
    },
    ru: {
      label: 'Русский',
      lang: 'ru-RU',
      title: 'VegTips',
      description: 'Практические советы для VEGAS Pro',
      link: '/ru/',
      themeConfig: {
        nav: navForLocale('ru'),
        sidebar: sidebarForLocale('ru'),
        outlineTitle: 'Навигация по странице',
        docFooter: {
          prev: 'Назад',
          next: 'Далее'
        }
      }
    }
  },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}favicon.svg` }],
    ['script', { src: `${base}js/language-redirect.js` }],
    ['script', { src: `${base}js/outline-depth.js` }],
    ['script', { src: `${base}js/hash-stabilizer.js` }]
  ],
  markdown: {
    config: (md) => {
      md.use(i18nMacroPlugin)
    }
  },
  themeConfig: {
    nav: navForLocale('root'),
    sidebar: sidebarForLocale('root'),
    search: {
      provider: 'local',
      options: {
        _render(md_src, env, md) {
          const locale = env.relativePath.split('/')[0]
          env.localeIndex = (env.relativePath.includes('/') && locale) ? locale : 'root'
          return md.renderAsync(md_src, env)
        },
        locales: {
          zh: {
            translations: {
              button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '无结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '回车',
                  navigateText: '导航',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'Esc',
                },
              },
            },
          },
          'zh-hant': {
            translations: {
              button: { buttonText: '搜尋', buttonAriaLabel: '搜尋' },
              modal: {
                displayDetails: '顯示詳細列表',
                resetButtonTitle: '重置搜尋',
                backButtonTitle: '關閉搜尋',
                noResultsText: '無結果',
                footer: {
                  selectText: '選擇',
                  selectKeyAriaLabel: '回車',
                  navigateText: '導航',
                  navigateUpKeyAriaLabel: '上箭頭',
                  navigateDownKeyAriaLabel: '下箭頭',
                  closeText: '關閉',
                  closeKeyAriaLabel: 'Esc',
                },
              },
            },
          },
          ja: {
            translations: {
              button: { buttonText: '検索', buttonAriaLabel: '検索' },
              modal: {
                displayDetails: '詳細リストを表示',
                resetButtonTitle: '検索をリセット',
                backButtonTitle: '検索を閉じる',
                noResultsText: '結果なし',
                footer: {
                  selectText: '選択',
                  selectKeyAriaLabel: '入力',
                  navigateText: '移動',
                  navigateUpKeyAriaLabel: '上矢印',
                  navigateDownKeyAriaLabel: '下矢印',
                  closeText: '閉じる',
                  closeKeyAriaLabel: 'Esc',
                },
              },
            },
          },
          ko: {
            translations: {
              button: { buttonText: '검색', buttonAriaLabel: '검색' },
              modal: {
                displayDetails: '상세 목록 표시',
                resetButtonTitle: '검색 초기화',
                backButtonTitle: '검색 닫기',
                noResultsText: '결과 없음',
                footer: {
                  selectText: '선택',
                  selectKeyAriaLabel: '입력',
                  navigateText: '이동',
                  navigateUpKeyAriaLabel: '위쪽 화살표',
                  navigateDownKeyAriaLabel: '아래쪽 화살표',
                  closeText: '닫기',
                  closeKeyAriaLabel: 'Esc',
                },
              },
            },
          },
          de: {
            translations: {
              button: { buttonText: 'Suche', buttonAriaLabel: 'Suche' },
              modal: {
                displayDetails: 'Detailliste anzeigen',
                resetButtonTitle: 'Suche zurücksetzen',
                backButtonTitle: 'Suche schließen',
                noResultsText: 'Keine Ergebnisse',
                footer: {
                  selectText: 'auswählen',
                  selectKeyAriaLabel: 'Eingabe',
                  navigateText: 'navigieren',
                  navigateUpKeyAriaLabel: 'Pfeil nach oben',
                  navigateDownKeyAriaLabel: 'Pfeil nach unten',
                  closeText: 'schließen',
                  closeKeyAriaLabel: 'Esc',
                },
              },
            },
          },
          fr: {
            translations: {
              button: { buttonText: 'Rechercher', buttonAriaLabel: 'Rechercher' },
              modal: {
                displayDetails: 'Afficher la liste détaillée',
                resetButtonTitle: 'Réinitialiser la recherche',
                backButtonTitle: 'Fermer la recherche',
                noResultsText: 'Aucun résultat',
                footer: {
                  selectText: 'sélectionner',
                  selectKeyAriaLabel: 'Entrée',
                  navigateText: 'naviguer',
                  navigateUpKeyAriaLabel: 'Flèche vers le haut',
                  navigateDownKeyAriaLabel: 'Flèche vers le bas',
                  closeText: 'fermer',
                  closeKeyAriaLabel: 'Échap',
                },
              },
            },
          },
          ru: {
            translations: {
              button: { buttonText: 'Поиск', buttonAriaLabel: 'Поиск' },
              modal: {
                displayDetails: 'Показать подробный список',
                resetButtonTitle: 'Сбросить поиск',
                backButtonTitle: 'Закрыть поиск',
                noResultsText: 'Нет результатов',
                footer: {
                  selectText: 'выбрать',
                  selectKeyAriaLabel: 'Ввод',
                  navigateText: 'навигация',
                  navigateUpKeyAriaLabel: 'Стрелка вверх',
                  navigateDownKeyAriaLabel: 'Стрелка вниз',
                  closeText: 'закрыть',
                  closeKeyAriaLabel: 'Esc',
                },
              },
            },
          },
        },
      },
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zzzzzz9125/VegTips' }
    ],
    outline: [2, 4]
  }
})
