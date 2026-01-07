<template>
  <section class="vfxtable" :class="{ 'vfxtable--resizing': !!resizing }">
    <div class="vfxtable__controls">
      <div class="vfxtable__control">
        <label class="vfxtable__label">{{ messages.searchLabel }}</label>
        <input
          v-model="searchTerm"
          class="vfxtable__input"
          :placeholder="messages.searchPlaceholder"
          type="search"
          inputmode="search"
        />
      </div>

      <div class="vfxtable__control">
        <label class="vfxtable__label">{{ messages.groupLabel }}</label>
        <select v-model="selectedGroup" class="vfxtable__select">
          <option value="all">{{ messages.allGroups }}</option>
          <option v-for="group in groupOptions" :key="group" :value="group">{{ group }}</option>
        </select>
      </div>

      <div class="vfxtable__control vfxtable__control--wide">
        <div class="vfxtable__label">{{ messages.typesLabel }}</div>
        <div class="vfxtable__chips">
          <button
            v-for="typeKey in typeKeys"
            :key="typeKey"
            class="vfxtable__chip"
            :class="{ 'vfxtable__chip--active': selectedTypes.includes(typeKey) }"
            type="button"
            @click="toggleType(typeKey)"
          >
            {{ messages.typeLabels[typeKey] }}
          </button>
          <button class="vfxtable__chip vfxtable__chip--ghost" type="button" @click="resetFilters">
            {{ messages.resetFilters }}
          </button>
        </div>
      </div>

      <div class="vfxtable__control">
        <label class="vfxtable__label">{{ messages.uidToggle }}</label>
        <label class="vfxtable__switch">
          <input type="checkbox" v-model="showUid" />
          <span class="vfxtable__switch-slider"></span>
        </label>
      </div>

      <div class="vfxtable__status">
        <span v-if="loading">{{ messages.loading }}</span>
        <span v-else-if="error" class="vfxtable__error">{{ messages.loadFailed }}: {{ error }}</span>
        <span v-else>{{ filteredRecords.length }} / {{ records.length }} {{ messages.items }}</span>
      </div>
    </div>

    <div class="vfxtable__table-wrapper" v-if="!loading && !error">
      <table class="vfxtable__table" :class="{ 'vfxtable__table--resizing': !!resizing }">
        <colgroup>
          <col
            v-for="col in columns"
            :key="col.key"
            :style="{ width: (colWidths[col.key] || col.minWidth) + 'px' }"
          />
        </colgroup>
        <thead>
          <tr>
            <th v-for="col in columns" :key="col.key">
              <div class="vfxtable__th" :class="{ 'vfxtable__th--sorted': sortKey === col.key, 'vfxtable__th--desc': sortKey === col.key && sortDir === 'desc' }" @click="toggleSort(col.key)">
                <span>{{ messages[col.labelKey] }}</span>
                <span
                  class="vfxtable__resize"
                  role="presentation"
                  @click.stop
                  @pointerdown="beginResize(col.key, $event)"
                ></span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in filteredRecords" :key="row.uid || row.name + row.englishName">
            <td
              v-for="(col, colIndex) in columns"
              :key="col.key"
              :class="{
                'vfxtable__cell--tight': col.tight,
                'vfxtable__cell--primary': colIndex === 0
              }"
            >
              <template v-if="col.key === 'name'">
                <div class="vfxtable__cell-main">{{ row.name || messages.unknown }}</div>
              </template>
              <template v-else-if="col.key === 'englishName'">
                {{ row.englishName || '—' }}
              </template>
              <template v-else-if="col.key === 'alias'">
                {{ (isZh ? row.aliasZh || row.aliasEn : row.aliasEn) || '—' }}
              </template>
              <template v-else-if="col.key === 'bigGroup'">
                {{ (isZh ? row.bigGroupZh || row.bigGroupEn : row.bigGroupEn) || '—' }}
              </template>
              <template v-else-if="col.key === 'subGroup'">
                {{ (isZh ? row.subGroupZh || row.subGroupEn : row.subGroupEn) || '—' }}
              </template>
              <template v-else-if="col.key === 'types'">
                <div class="vfxtable__badges">
                  <span v-if="row.videoFx" class="vfxtable__badge vfxtable__badge--video">{{ messages.typeShort.videoFx }}</span>
                  <span v-if="row.transitionFx" class="vfxtable__badge vfxtable__badge--transition">{{ messages.typeShort.transitionFx }}</span>
                  <span v-if="row.generatorFx" class="vfxtable__badge vfxtable__badge--generator">{{ messages.typeShort.generatorFx }}</span>
                  <span v-if="row.compositeFx" class="vfxtable__badge vfxtable__badge--composite">{{ messages.typeShort.compositeFx }}</span>
                  <span v-if="!row.videoFx && !row.transitionFx && !row.generatorFx && !row.compositeFx" class="vfxtable__badge vfxtable__badge--muted">—</span>
                </div>
              </template>
              <template v-else-if="col.key === 'uid'">
                <span class="vfxtable__uid">{{ row.uid || '—' }}</span>
              </template>
              <template v-else>
                —
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else-if="!loading && error" class="vfxtable__empty">{{ messages.loadFailed }}</div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watchEffect } from 'vue'
import { useData } from 'vitepress'

type FxType = 'videoFx' | 'transitionFx' | 'generatorFx' | 'compositeFx'

type ColumnKey = 'name' | 'englishName' | 'alias' | 'bigGroup' | 'subGroup' | 'types' | 'uid'
type ColumnDef = { key: ColumnKey; labelKey: keyof Pick<Messages, 'colChineseName' | 'colEnglishName' | 'colAlias' | 'colGroup' | 'colSubGroup' | 'colTypes' | 'colUid'>; minWidth: number; tight?: boolean }

type VideoFxRecord = {
  name: string
  englishName: string
  aliasZh: string
  aliasEn: string
  bigGroupZh: string
  bigGroupEn: string
  subGroupZh: string
  subGroupEn: string
  videoFx: boolean
  transitionFx: boolean
  generatorFx: boolean
  compositeFx: boolean
  uid: string
}

type Messages = {
  searchLabel: string
  searchPlaceholder: string
  groupLabel: string
  allGroups: string
  typesLabel: string
  resetFilters: string
  loading: string
  loadFailed: string
  items: string
  colChineseName: string
  colEnglishName: string
  colAlias: string
  colGroup: string
  colSubGroup: string
  colTypes: string
  colUid: string
  unknown: string
  typeLabels: Record<FxType, string>
  typeShort: Record<FxType, string>
  uidToggle: string
}

type HeaderMap = {
  name: number
  englishName: number
  aliasZh: number
  aliasEn: number
  bigGroupZh: number
  bigGroupEn: number
  subGroupZh: number
  subGroupEn: number
  videoFx: number
  transitionFx: number
  generatorFx: number
  compositeFx: number
  uid: number
}

const { lang } = useData()
const typeKeys: FxType[] = ['videoFx', 'transitionFx', 'generatorFx', 'compositeFx']
const allColumns: ColumnDef[] = [
  { key: 'name', labelKey: 'colChineseName', minWidth: 220 },
  { key: 'englishName', labelKey: 'colEnglishName', minWidth: 170 },
  { key: 'alias', labelKey: 'colAlias', minWidth: 170 },
  { key: 'bigGroup', labelKey: 'colGroup', minWidth: 140 },
  { key: 'subGroup', labelKey: 'colSubGroup', minWidth: 140 },
  { key: 'types', labelKey: 'colTypes', minWidth: 200 },
  { key: 'uid', labelKey: 'colUid', minWidth: 220, tight: true }
]

const defaultWidths: Record<ColumnKey, number> = allColumns.reduce((acc, col) => {
  acc[col.key] = col.minWidth
  return acc
}, {} as Record<ColumnKey, number>)

const records = ref<VideoFxRecord[]>([])
const loading = ref(true)
const error = ref<string | null>(null)
const searchTerm = ref('')
const selectedGroup = ref<'all' | string>('all')
const selectedTypes = ref<FxType[]>([])
const showUid = ref(false)
const sortKey = ref<ColumnKey>('name')
const sortDir = ref<'asc' | 'desc'>('asc')
const colWidths = ref<Record<ColumnKey, number>>({ ...defaultWidths })
const resizing = ref<{ key: ColumnKey; startX: number; startWidth: number } | null>(null)
let activeMove: ((e: PointerEvent) => void) | null = null
let activeStop: (() => void) | null = null

const isZh = computed(() => (lang.value || '').toLowerCase().startsWith('zh'))
const currentLocale = computed(() => {
  const lv = (lang.value || '').toLowerCase()
  if (lv.startsWith('zh')) return 'zh'
  if (lv.startsWith('ja')) return 'ja'
  if (lv.startsWith('ko')) return 'ko'
  if (lv.startsWith('de')) return 'de'
  if (lv.startsWith('fr')) return 'fr'
  return 'en'
})

const messages = computed<Messages>(() => {
  switch (currentLocale.value) {
    case 'zh':
      return {
        searchLabel: '搜索',
        searchPlaceholder: '按名称 / UID / 分组搜索',
        groupLabel: '大分组',
        allGroups: '全部分组',
        typesLabel: '类型筛选',
        resetFilters: '重置筛选',
        loading: '正在载入列表…',
        loadFailed: '载入失败',
        items: '条结果',
        colChineseName: '中文名称',
        colEnglishName: '英文名称',
        colAlias: '别称',
        colGroup: '大分组',
        colSubGroup: '小分组',
        colTypes: '类型',
        colUid: 'UID',
        unknown: '未知名称',
        typeLabels: {
          videoFx: '视频 FX',
          transitionFx: '转场 FX',
          generatorFx: '媒体生成器 FX',
          compositeFx: '合成模式 FX'
        },
        typeShort: {
          videoFx: '视',
          transitionFx: '转',
          generatorFx: '媒',
          compositeFx: '合'
        },
        uidToggle: '显示 UID 列'
      }
    case 'ja':
      return {
        searchLabel: '検索',
        searchPlaceholder: '名前 / UID / グループで検索',
        groupLabel: 'カテゴリ',
        allGroups: 'すべてのカテゴリ',
        typesLabel: 'タイプフィルター',
        resetFilters: 'フィルターをリセット',
        loading: '読み込み中…',
        loadFailed: '読み込みに失敗しました',
        items: '件',
        colChineseName: '中国語名',
        colEnglishName: '英語名',
        colAlias: '別名',
        colGroup: 'グループ',
        colSubGroup: 'サブグループ',
        colTypes: 'タイプ',
        colUid: 'UID',
        unknown: '不明',
        typeLabels: {
          videoFx: 'ビデオ FX',
          transitionFx: 'トランジション FX',
          generatorFx: 'ジェネレーター FX',
          compositeFx: 'コンポジット FX'
        },
        typeShort: {
          videoFx: 'V',
          transitionFx: 'T',
          generatorFx: 'G',
          compositeFx: 'C'
        },
        uidToggle: 'UID 列を表示'
      }
    case 'ko':
      return {
        searchLabel: '검색',
        searchPlaceholder: '이름 / UID / 그룹으로 검색',
        groupLabel: '카테고리',
        allGroups: '모든 카테고리',
        typesLabel: '유형 필터',
        resetFilters: '필터 초기화',
        loading: '로드 중…',
        loadFailed: '로드 실패',
        items: '개',
        colChineseName: '중국어 이름',
        colEnglishName: '영문 이름',
        colAlias: '별칭',
        colGroup: '그룹',
        colSubGroup: '하위 그룹',
        colTypes: '유형',
        colUid: 'UID',
        unknown: '알 수 없음',
        typeLabels: {
          videoFx: '비디오 FX',
          transitionFx: '트랜지션 FX',
          generatorFx: '제너레이터 FX',
          compositeFx: '컴포지트 FX'
        },
        typeShort: {
          videoFx: 'V',
          transitionFx: 'T',
          generatorFx: 'G',
          compositeFx: 'C'
        },
        uidToggle: 'UID 열 표시'
      }
    case 'de':
      return {
        searchLabel: 'Suche',
        searchPlaceholder: 'Suche nach Name / UID / Gruppe',
        groupLabel: 'Kategorie',
        allGroups: 'Alle Kategorien',
        typesLabel: 'Typfilter',
        resetFilters: 'Filter zurücksetzen',
        loading: 'Lade Liste…',
        loadFailed: 'Laden fehlgeschlagen',
        items: 'Einträge',
        colChineseName: 'Chinesischer Name',
        colEnglishName: 'Name',
        colAlias: 'Alias',
        colGroup: 'Gruppe',
        colSubGroup: 'Untergruppe',
        colTypes: 'Typen',
        colUid: 'UID',
        unknown: 'Unbekannt',
        typeLabels: {
          videoFx: 'Video FX',
          transitionFx: 'Transition FX',
          generatorFx: 'Generator FX',
          compositeFx: 'Composite FX'
        },
        typeShort: {
          videoFx: 'V',
          transitionFx: 'T',
          generatorFx: 'G',
          compositeFx: 'C'
        },
        uidToggle: 'UID-Spalte anzeigen'
      }
    case 'fr':
      return {
        searchLabel: 'Recherche',
        searchPlaceholder: 'Rechercher par nom / UID / groupe',
        groupLabel: 'Catégorie',
        allGroups: 'Toutes les catégories',
        typesLabel: 'Filtres de type',
        resetFilters: 'Réinitialiser les filtres',
        loading: 'Chargement…',
        loadFailed: 'Échec du chargement',
        items: 'éléments',
        colChineseName: 'Nom chinois',
        colEnglishName: 'Nom',
        colAlias: 'Alias',
        colGroup: 'Groupe',
        colSubGroup: 'Sous-groupe',
        colTypes: 'Types',
        colUid: 'UID',
        unknown: 'Inconnu',
        typeLabels: {
          videoFx: 'FX vidéo',
          transitionFx: 'FX de transition',
          generatorFx: 'FX générateur',
          compositeFx: 'FX composite'
        },
        typeShort: {
          videoFx: 'V',
          transitionFx: 'T',
          generatorFx: 'G',
          compositeFx: 'C'
        },
        uidToggle: 'Afficher la colonne UID'
      }
    default:
      return {
        searchLabel: 'Search',
        searchPlaceholder: 'Search by name / UID / group',
        groupLabel: 'Category',
        allGroups: 'All categories',
        typesLabel: 'Type filters',
        resetFilters: 'Reset filters',
        loading: 'Loading list…',
        loadFailed: 'Load failed',
        items: 'items',
        colChineseName: 'Chinese Name',
        colEnglishName: 'Name',
        colAlias: 'Alias',
        colGroup: 'Group',
        colSubGroup: 'Subgroup',
        colTypes: 'Types',
        colUid: 'UID',
        unknown: 'Unknown',
        typeLabels: {
          videoFx: 'Video FX',
          transitionFx: 'Transition FX',
          generatorFx: 'Generator FX',
          compositeFx: 'Composite FX'
        },
        typeShort: {
          videoFx: 'V',
          transitionFx: 'T',
          generatorFx: 'G',
          compositeFx: 'C'
        },
        uidToggle: 'Show UID column'
      }
  }
})

const groupOptions = computed(() => {
  const set = new Set<string>()
  records.value.forEach((item) => {
    const key = groupFor(item)?.trim()
    if (key) set.add(key)
  })
  return Array.from(set).sort((a, b) => a.localeCompare(b))
})

const aliasFor = (item: VideoFxRecord) =>
  isZh.value ? item.aliasZh || item.aliasEn : item.aliasEn || ''
const groupFor = (item: VideoFxRecord) =>
  isZh.value ? item.bigGroupZh || item.bigGroupEn : item.bigGroupEn || ''
const subGroupFor = (item: VideoFxRecord) =>
  isZh.value ? item.subGroupZh || item.subGroupEn : item.subGroupEn || ''

const sortValue = (item: VideoFxRecord, key: ColumnKey): string => {
  switch (key) {
    case 'name':
      return (item.name || '').toLowerCase()
    case 'englishName':
      return (item.englishName || '').toLowerCase()
    case 'alias':
      return (aliasFor(item) || '').toLowerCase()
    case 'bigGroup':
      return (groupFor(item) || '').toLowerCase()
    case 'subGroup':
      return (subGroupFor(item) || '').toLowerCase()
    case 'types':
      return `${item.videoFx ? '1' : '0'}${item.transitionFx ? '1' : '0'}${item.generatorFx ? '1' : '0'}${item.compositeFx ? '1' : '0'}`
    case 'uid':
      return (item.uid || '').toLowerCase()
    default:
      return ''
  }
}

const filteredRecords = computed(() => {
  const term = searchTerm.value.trim().toLowerCase()
  const activeTypes = selectedTypes.value

  const filtered = records.value.filter((item) => {
    const group = groupFor(item)
    if (selectedGroup.value !== 'all' && group !== selectedGroup.value) return false

    if (activeTypes.length) {
      const matchesAll = activeTypes.every((type) => item[type])
      if (!matchesAll) return false
    }

    if (!term) return true

    const haystack = [
      item.name,
      item.englishName,
      aliasFor(item),
      groupFor(item),
      subGroupFor(item),
      item.uid
    ]
      .join(' ')
      .toLowerCase()

    return haystack.includes(term)
  })

  return filtered.sort((a, b) => {
    const key = sortKey.value
    const dir = sortDir.value === 'asc' ? 1 : -1
    const av = sortValue(a, key)
    const bv = sortValue(b, key)
    const cmp = av.localeCompare(bv)
    if (cmp !== 0) return cmp * dir

    // tie-breakers for stability
    const byName = (a.name || '').localeCompare(b.name || '')
    if (byName !== 0) return byName
    return (a.uid || '').localeCompare(b.uid || '')
  })
})

const columns = computed<ColumnDef[]>(() => {
  const base = isZh.value ? allColumns : allColumns.filter((col) => col.key !== 'name')
  if (showUid.value) {
    return base.filter((col) => !['alias', 'bigGroup', 'subGroup'].includes(col.key))
  }
  return base.filter((col) => col.key !== 'uid')
})

watchEffect(() => {
  const cols = columns.value
  if (!cols.length) return
  if (!cols.some((c) => c.key === sortKey.value)) {
    sortKey.value = cols[0].key
    sortDir.value = 'asc'
  }
})

const toggleType = (type: FxType) => {
  selectedTypes.value = selectedTypes.value.includes(type)
    ? selectedTypes.value.filter((t) => t !== type)
    : [...selectedTypes.value, type]
}

const toggleSort = (key: ColumnKey) => {
  if (sortKey.value === key) {
    sortDir.value = sortDir.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortKey.value = key
    sortDir.value = 'asc'
  }
}

const resetFilters = () => {
  searchTerm.value = ''
  selectedGroup.value = 'all'
  selectedTypes.value = []
}

const parseCsvLine = (line: string): string[] => {
  const cells: string[] = []
  let current = ''
  let inQuotes = false

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i]

    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"'
        i += 1
      } else {
        inQuotes = !inQuotes
      }
      continue
    }

    if (char === ',' && !inQuotes) {
      cells.push(current.trim())
      current = ''
      continue
    }

    current += char
  }

  cells.push(current.trim())
  return cells
}

const normalizeBool = (value: string | undefined): boolean => value === '√'

const buildHeaderMap = (header: string[]): HeaderMap => {
  const normalized = header.map((h) => h.trim().toLowerCase())
  const idx = (keys: string[]) => keys.map((k) => normalized.indexOf(k)).find((i) => i >= 0) ?? -1

  const map: HeaderMap = {
    name: idx(['name zh-cn']),
    englishName: idx(['name en-us']),
    aliasZh: idx(['alias zh-cn']),
    aliasEn: idx(['alias en-us']),
    bigGroupZh: idx(['group zh-cn']),
    bigGroupEn: idx(['group en-us']),
    subGroupZh: idx(['subgroup zh-cn']),
    subGroupEn: idx(['subgroup en-us']),
    videoFx: idx(['video fx']),
    transitionFx: idx(['transition fx']),
    generatorFx: idx(['media generator fx']),
    compositeFx: idx(['composite mode fx']),
    uid: idx(['uid'])
  }

  // fallback to legacy positional order if required fields missing
  const missingCore = [map.name, map.englishName, map.uid].some((v) => v < 0)
  if (missingCore && header.length >= 10) {
    return {
      englishName: 0,
      name: 1,
      aliasEn: 2,
      aliasZh: 3,
      bigGroupEn: 4,
      bigGroupZh: 5,
      subGroupEn: 6,
      subGroupZh: 7,
      videoFx: 8,
      transitionFx: 9,
      generatorFx: 10,
      compositeFx: 11,
      uid: 12
    }
  }

  return map
}

const mapRow = (row: string[], headerMap: HeaderMap): VideoFxRecord | null => {
  const pick = (idx: number) => (idx >= 0 ? row[idx] ?? '' : '')

  const name = pick(headerMap.name)
  const englishName = pick(headerMap.englishName)
  const uid = pick(headerMap.uid)

  if (!name && !englishName && !uid) return null

  return {
    name,
    englishName,
    aliasZh: pick(headerMap.aliasZh),
    aliasEn: pick(headerMap.aliasEn),
    bigGroupZh: pick(headerMap.bigGroupZh),
    bigGroupEn: pick(headerMap.bigGroupEn),
    subGroupZh: pick(headerMap.subGroupZh),
    subGroupEn: pick(headerMap.subGroupEn),
    videoFx: normalizeBool(pick(headerMap.videoFx)),
    transitionFx: normalizeBool(pick(headerMap.transitionFx)),
    generatorFx: normalizeBool(pick(headerMap.generatorFx)),
    compositeFx: normalizeBool(pick(headerMap.compositeFx)),
    uid
  }
}

const loadCsv = async () => {
  loading.value = true
  error.value = null

  try {
    const response = await fetch('/csv/videofx.csv')
    if (!response.ok) throw new Error(`${response.status}`)
    const text = await response.text()

    const lines = text.split(/\r?\n/).filter((line) => line.trim().length)
    if (!lines.length) throw new Error('Empty file')

    const [headerLine, ...dataLines] = lines
    const headerCells = parseCsvLine(headerLine)
    const headerMap = buildHeaderMap(headerCells)

    const parsed = dataLines
      .map(parseCsvLine)
      .map((cells) => mapRow(cells, headerMap))
      .filter((item): item is VideoFxRecord => Boolean(item))

    records.value = parsed
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Unknown error'
  } finally {
    loading.value = false
  }
}

const beginResize = (key: ColumnKey, event: PointerEvent) => {
  const startWidth = colWidths.value[key] || defaultWidths[key]
  resizing.value = { key, startX: event.clientX, startWidth }

  const onMove = (e: PointerEvent) => {
    if (!resizing.value) return
    const def = columns.value.find((c) => c.key === key)
    const min = def?.minWidth ?? 120
    const delta = e.clientX - resizing.value.startX
    const next = Math.max(min, resizing.value.startWidth + delta)
    colWidths.value = { ...colWidths.value, [key]: next }
  }

  const stop = () => {
    resizing.value = null
    if (activeMove) window.removeEventListener('pointermove', activeMove)
    if (activeStop) window.removeEventListener('pointerup', activeStop)
    activeMove = null
    activeStop = null
  }

  activeMove = onMove
  activeStop = stop
  window.addEventListener('pointermove', onMove)
  window.addEventListener('pointerup', stop)
  event.preventDefault()
}

onBeforeUnmount(() => {
  if (activeMove) window.removeEventListener('pointermove', activeMove)
  if (activeStop) window.removeEventListener('pointerup', activeStop)
  activeMove = null
  activeStop = null
  resizing.value = null
})

onMounted(() => {
  if (typeof window === 'undefined') return
  loadCsv()
})
</script>
