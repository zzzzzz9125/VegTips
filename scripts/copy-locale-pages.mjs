import fs from 'fs'
import path from 'path'

const docsDir = path.resolve(import.meta.dirname, '..', 'docs')
const locales = ['zh', 'zh-hant', 'ja', 'ko', 'de', 'fr', 'ru']
const pages = ['index.md', 'videofxlist.md', 'scriptapi.md', 'ultrapaste.md']

for (const locale of locales) {
  const localeDir = path.join(docsDir, locale)
  if (!fs.existsSync(localeDir)) {
    fs.mkdirSync(localeDir, { recursive: true })
  }
  for (const page of pages) {
    const src = path.join(docsDir, page)
    const dest = path.join(localeDir, page)
    fs.copyFileSync(src, dest)
    console.log(`Copied: ${page} → ${locale}/${page}`)
  }
}
console.log('Done.')
