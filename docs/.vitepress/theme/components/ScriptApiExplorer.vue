<template>
  <section class="scriptapi">
    <div class="scriptapi__controls">
      <div class="scriptapi__field">
        <label class="scriptapi__label">{{ t.versionA }}</label>
        <select v-model="versionA" class="scriptapi__select">
          <option v-for="version in versions" :key="version" :value="version">{{ version }}</option>
        </select>
      </div>

      <div class="scriptapi__field scriptapi__field--switch">
        <label class="scriptapi__label">{{ t.compareMode }}</label>
        <label class="scriptapi__switch">
          <input v-model="compareEnabled" type="checkbox" />
          <span class="scriptapi__switch-slider"></span>
        </label>
      </div>

      <div v-if="compareEnabled" class="scriptapi__field">
        <label class="scriptapi__label">{{ t.versionB }}</label>
        <select v-model="versionB" class="scriptapi__select">
          <option v-for="version in versionBOptions" :key="version" :value="version">{{ version }}</option>
        </select>
      </div>

      <div class="scriptapi__field">
        <label class="scriptapi__label">{{ t.kindFilter }}</label>
        <select v-model="selectedKind" class="scriptapi__select">
          <option value="all">{{ t.allKinds }}</option>
          <option v-for="kind in availableKinds" :key="kind" :value="kind">{{ kindLabel(kind) }}</option>
        </select>
      </div>

      <div class="scriptapi__field scriptapi__field--wide">
        <label class="scriptapi__label">{{ t.classFilter }}</label>
        <select v-model="selectedClass" class="scriptapi__select">
          <option value="all">{{ t.allClasses }}</option>
          <option v-for="className in availableClasses" :key="className" :value="className">{{ className }}</option>
        </select>
      </div>

      <div class="scriptapi__status">
        <span v-if="loading">{{ t.loading }}</span>
        <span v-else-if="error" class="scriptapi__error">{{ t.loadFailed }}: {{ error }}</span>
        <template v-else>
          <span>{{ t.items }}: {{ filteredMembers.length }} / {{ activeMembers.length }}</span>
          <span v-if="compareEnabled" class="scriptapi__sep">·</span>
          <span v-if="compareEnabled">{{ t.diffSummary(addedCount, removedCount, changedCount) }}</span>
        </template>
      </div>
    </div>

    <div v-if="!loading && !error && !compareEnabled" class="scriptapi__table-wrap">
      <table class="scriptapi__table">
        <thead>
          <tr>
            <th class="scriptapi__col-class">{{ t.colClass }}</th>
            <th>{{ t.colKind }}</th>
            <th>{{ t.colMember }}</th>
            <th>{{ t.colSummary }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in displayRows" :key="`${row.kind}:${row.rawName}`">
            <td v-if="row.showClass" :rowspan="row.classRowspan" class="scriptapi__class-cell scriptapi__col-class">{{ row.className }}</td>
            <td class="scriptapi__kind">{{ kindLabel(row.kind) }}</td>
            <td class="scriptapi__member">{{ row.displayName }}</td>
            <td>{{ row.summary || '—' }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="!loading && !error && compareEnabled" class="scriptapi__diff">
      <h3>{{ t.diffTitle(versionA, versionB) }}</h3>

      <div class="scriptapi__table-wrap">
        <table class="scriptapi__table scriptapi__table--diff">
          <thead>
            <tr>
              <th class="scriptapi__col-class">{{ t.colClass }}</th>
              <th>{{ t.colKind }}</th>
              <th>{{ t.colMember }}</th>
              <th>Status</th>
              <th>{{ versionA }}</th>
              <th>{{ versionB }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in diffRows" :key="`diff:${row.rawName}`">
              <td class="scriptapi__class-value scriptapi__col-class">{{ row.className }}</td>
              <td class="scriptapi__kind">{{ kindLabel(row.kind) }}</td>
              <td class="scriptapi__member">{{ row.memberName }}</td>
              <td class="scriptapi__status-tag" :data-status="row.status">{{ diffStatusLabel(row.status) }}</td>
              <td class="scriptapi__diff-cell">{{ detailText(row.left) }}</td>
              <td class="scriptapi__diff-cell">{{ detailText(row.right) }}</td>
            </tr>
            <tr v-if="!diffRows.length">
              <td colspan="6">No diff under current filter.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

type Kind = 'T' | 'P' | 'M' | 'F' | 'E' | 'N'

type ApiMember = {
  rawName: string
  kind: Kind
  displayName: string
  className: string
  summary: string
  params: Array<{ name: string; description: string }>
  returns: string
}

type DisplayRow = ApiMember & {
  showClass: boolean
  classRowspan: number
}

type DiffStatus = 'added' | 'removed' | 'changed'

type DiffRow = {
  rawName: string
  kind: Kind
  className: string
  memberName: string
  status: DiffStatus
  left: ApiMember | null
  right: ApiMember | null
}

type MessageSet = {
  versionA: string
  versionB: string
  compareMode: string
  kindFilter: string
  classFilter: string
  allKinds: string
  allClasses: string
  loading: string
  loadFailed: string
  items: string
  colKind: string
  colClass: string
  colMember: string
  colSummary: string
  added: string
  removed: string
  changed: string
  kindNames: Record<Kind, string>
  diffTitle: (a: string, b: string) => string
  diffSummary: (a: number, r: number, c: number) => string
}

const props = withDefaults(defineProps<{ locale?: string }>(), {
  locale: 'en'
})

const versions = ['21.0.0.208', '21.0.0.315', '22.0.0.250', '23.0.0.302']
const versionA = ref(versions[versions.length - 1])
const versionB = ref(versions[versions.length - 2])
const compareEnabled = ref(false)
const selectedKind = ref<'all' | Kind>('all')
const selectedClass = ref('all')

const loading = ref(false)
const error = ref('')
const cache = new Map<string, ApiMember[]>()

const messageMap: Record<string, MessageSet> = {
  en: {
    versionA: 'Base version',
    versionB: 'Compare with',
    compareMode: 'Enable diff mode',
    kindFilter: 'Filter by kind',
    classFilter: 'Filter by class under ScriptPortal.Vegas',
    allKinds: 'All kinds',
    allClasses: 'All classes',
    loading: 'Loading XML…',
    loadFailed: 'Failed to load XML',
    items: 'Members',
    colKind: 'Kind',
    colClass: 'Class',
    colMember: 'Member',
    colSummary: 'Summary',
    added: 'Added in compare version',
    removed: 'Removed from compare version',
    changed: 'Changed docs/signature',
    kindNames: { T: 'Type', P: 'Property', M: 'Method', F: 'Field', E: 'Event', N: 'Other' },
    diffTitle: (a, b) => `Diff: ${a} → ${b}`,
    diffSummary: (a, r, c) => `Added ${a}, Removed ${r}, Changed ${c}`
  },
  zh: {
    versionA: '基准版本',
    versionB: '对比版本',
    compareMode: '启用差异模式',
    kindFilter: '按 Kind 筛选',
    classFilter: '按 ScriptPortal.Vegas 下的类筛选',
    allKinds: '全部 Kind',
    allClasses: '全部类',
    loading: '正在加载 XML…',
    loadFailed: 'XML 加载失败',
    items: '成员数',
    colKind: 'Kind',
    colClass: '类',
    colMember: '成员',
    colSummary: '说明',
    added: '对比版本新增',
    removed: '对比版本移除',
    changed: '文档/签名变化',
    kindNames: { T: '类型', P: '属性', M: '方法', F: '字段', E: '事件', N: '其他' },
    diffTitle: (a, b) => `差异：${a} → ${b}`,
    diffSummary: (a, r, c) => `新增 ${a}，移除 ${r}，变化 ${c}`
  },
  'zh-hant': {
    versionA: '基準版本',
    versionB: '對比版本',
    compareMode: '啟用差異模式',
    kindFilter: '依 Kind 篩選',
    classFilter: '依 ScriptPortal.Vegas 下的類別篩選',
    allKinds: '全部 Kind',
    allClasses: '全部類別',
    loading: '正在載入 XML…',
    loadFailed: 'XML 載入失敗',
    items: '成員數',
    colKind: 'Kind',
    colClass: '類別',
    colMember: '成員',
    colSummary: '說明',
    added: '對比版本新增',
    removed: '對比版本移除',
    changed: '文件/簽章變更',
    kindNames: { T: '型別', P: '屬性', M: '方法', F: '欄位', E: '事件', N: '其他' },
    diffTitle: (a, b) => `差異：${a} → ${b}`,
    diffSummary: (a, r, c) => `新增 ${a}，移除 ${r}，變更 ${c}`
  },
  ja: {
    versionA: '基準バージョン',
    versionB: '比較バージョン',
    compareMode: '差分モードを有効化',
    kindFilter: 'Kind で絞り込み',
    classFilter: 'ScriptPortal.Vegas 配下のクラスで絞り込み',
    allKinds: 'すべての Kind',
    allClasses: 'すべてのクラス',
    loading: 'XML を読み込み中…',
    loadFailed: 'XML の読み込みに失敗',
    items: 'メンバー数',
    colKind: 'Kind',
    colClass: 'クラス',
    colMember: 'メンバー',
    colSummary: '概要',
    added: '比較先で追加',
    removed: '比較先で削除',
    changed: 'ドキュメント/シグネチャ変更',
    kindNames: { T: '型', P: 'プロパティ', M: 'メソッド', F: 'フィールド', E: 'イベント', N: 'その他' },
    diffTitle: (a, b) => `差分: ${a} → ${b}`,
    diffSummary: (a, r, c) => `追加 ${a}、削除 ${r}、変更 ${c}`
  },
  ko: {
    versionA: '기준 버전',
    versionB: '비교 버전',
    compareMode: '차이 모드 사용',
    kindFilter: 'Kind 기준 필터',
    classFilter: 'ScriptPortal.Vegas 클래스 기준 필터',
    allKinds: '모든 Kind',
    allClasses: '모든 클래스',
    loading: 'XML 불러오는 중…',
    loadFailed: 'XML 로드 실패',
    items: '멤버 수',
    colKind: 'Kind',
    colClass: '클래스',
    colMember: '멤버',
    colSummary: '요약',
    added: '비교 버전에 추가됨',
    removed: '비교 버전에서 제거됨',
    changed: '문서/시그니처 변경',
    kindNames: { T: '형식', P: '속성', M: '메서드', F: '필드', E: '이벤트', N: '기타' },
    diffTitle: (a, b) => `차이: ${a} → ${b}`,
    diffSummary: (a, r, c) => `추가 ${a}, 제거 ${r}, 변경 ${c}`
  },
  de: {
    versionA: 'Basisversion',
    versionB: 'Vergleichen mit',
    compareMode: 'Diff-Modus aktivieren',
    kindFilter: 'Nach Kind filtern',
    classFilter: 'Nach Klasse unter ScriptPortal.Vegas filtern',
    allKinds: 'Alle Kind-Typen',
    allClasses: 'Alle Klassen',
    loading: 'XML wird geladen…',
    loadFailed: 'XML konnte nicht geladen werden',
    items: 'Mitglieder',
    colKind: 'Kind',
    colClass: 'Klasse',
    colMember: 'Member',
    colSummary: 'Zusammenfassung',
    added: 'In Vergleichsversion hinzugefügt',
    removed: 'In Vergleichsversion entfernt',
    changed: 'Dokumentation/Signatur geändert',
    kindNames: { T: 'Typ', P: 'Eigenschaft', M: 'Methode', F: 'Feld', E: 'Ereignis', N: 'Sonstiges' },
    diffTitle: (a, b) => `Diff: ${a} → ${b}`,
    diffSummary: (a, r, c) => `Hinzugefügt ${a}, Entfernt ${r}, Geändert ${c}`
  },
  fr: {
    versionA: 'Version de base',
    versionB: 'Comparer avec',
    compareMode: 'Activer le mode diff',
    kindFilter: 'Filtrer par Kind',
    classFilter: 'Filtrer par classe sous ScriptPortal.Vegas',
    allKinds: 'Tous les Kind',
    allClasses: 'Toutes les classes',
    loading: 'Chargement du XML…',
    loadFailed: 'Échec du chargement XML',
    items: 'Membres',
    colKind: 'Kind',
    colClass: 'Classe',
    colMember: 'Membre',
    colSummary: 'Résumé',
    added: 'Ajoutés dans la version comparée',
    removed: 'Supprimés dans la version comparée',
    changed: 'Documentation/signature modifiée',
    kindNames: { T: 'Type', P: 'Propriété', M: 'Méthode', F: 'Champ', E: 'Événement', N: 'Autre' },
    diffTitle: (a, b) => `Diff : ${a} → ${b}`,
    diffSummary: (a, r, c) => `Ajoutés ${a}, Supprimés ${r}, Modifiés ${c}`
  },
  ru: {
    versionA: 'Базовая версия',
    versionB: 'Сравнить с',
    compareMode: 'Включить режим сравнения',
    kindFilter: 'Фильтр по Kind',
    classFilter: 'Фильтр по классу в ScriptPortal.Vegas',
    allKinds: 'Все Kind',
    allClasses: 'Все классы',
    loading: 'Загрузка XML…',
    loadFailed: 'Не удалось загрузить XML',
    items: 'Участники',
    colKind: 'Kind',
    colClass: 'Класс',
    colMember: 'Член',
    colSummary: 'Описание',
    added: 'Добавлено в сравниваемой версии',
    removed: 'Удалено в сравниваемой версии',
    changed: 'Изменения документации/сигнатуры',
    kindNames: { T: 'Тип', P: 'Свойство', M: 'Метод', F: 'Поле', E: 'Событие', N: 'Прочее' },
    diffTitle: (a, b) => `Разница: ${a} → ${b}`,
    diffSummary: (a, r, c) => `Добавлено ${a}, Удалено ${r}, Изменено ${c}`
  }
}

const t = computed(() => messageMap[props.locale || 'en'] ?? messageMap.en)

const versionBOptions = computed(() => versions.filter((v) => v !== versionA.value))

watch(versionA, () => {
  if (versionA.value === versionB.value) {
    versionB.value = versionBOptions.value[0] || versions[0]
  }
})

watch(versionBOptions, (next) => {
  if (!next.includes(versionB.value)) {
    versionB.value = next[0] || versions[0]
  }
})

const activeMembers = ref<ApiMember[]>([])
const compareMembers = ref<ApiMember[]>([])

const normalizeSpace = (text: string) => text.replace(/\s+/g, ' ').trim()

const stripNamespace = (value: string) => value.replace(/ScriptPortal\.Vegas\./g, '')

const kindFromName = (name: string): Kind => {
  const prefix = name.split(':')[0] as Kind
  return ['T', 'P', 'M', 'F', 'E'].includes(prefix) ? prefix : 'N'
}

const parseClassName = (kind: Kind, raw: string): string => {
  const body = stripNamespace(raw)
  if (kind === 'T') {
    return body.split('`')[0].split('+').join('.')
  }

  const signatureBase = body.split('(')[0]
  const lastDot = signatureBase.lastIndexOf('.')
  if (lastDot <= 0) return '(Global)'

  return signatureBase.slice(0, lastDot).split('+').join('.')
}

const toDisplayName = (name: string): string => {
  const body = name.includes(':') ? name.slice(name.indexOf(':') + 1) : name
  return stripNamespace(body).split('+').join('.')
}

const extractMembers = (xmlText: string): ApiMember[] => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(xmlText, 'text/xml')
  const parseError = doc.querySelector('parsererror')
  if (parseError) {
    throw new Error(parseError.textContent || 'Invalid XML')
  }

  const memberNodes = Array.from(doc.querySelectorAll('members > member'))

  return memberNodes
    .map((node) => {
      const name = node.getAttribute('name') || ''
      if (!name) return null

      const summary = normalizeSpace(node.querySelector('summary')?.textContent || '')
      const returns = normalizeSpace(node.querySelector('returns')?.textContent || '')
      const params = Array.from(node.querySelectorAll('param')).map((paramNode) => ({
        name: paramNode.getAttribute('name') || '',
        description: normalizeSpace(paramNode.textContent || '')
      }))

      const kind = kindFromName(name)
      const raw = name.includes(':') ? name.slice(name.indexOf(':') + 1) : name
      if (!raw.startsWith('ScriptPortal.Vegas.')) return null

      return {
        rawName: raw,
        kind,
        displayName: toDisplayName(name),
        className: parseClassName(kind, raw),
        summary,
        params,
        returns
      } as ApiMember
    })
    .filter((item): item is ApiMember => !!item)
}

const loadVersion = async (version: string): Promise<ApiMember[]> => {
  if (cache.has(version)) return cache.get(version) || []

  const res = await fetch(`/scriptapi/${version}/ScriptPortal.Vegas.xml`)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)

  const text = await res.text()
  const parsed = extractMembers(text)
  cache.set(version, parsed)
  return parsed
}

const kindOrder: Kind[] = ['T', 'P', 'M', 'F', 'E', 'N']

const availableKinds = computed(() => {
  const kinds = new Set(activeMembers.value.map((item) => item.kind))
  return kindOrder.filter((kind) => kinds.has(kind))
})

const availableClasses = computed(() => {
  const list = activeMembers.value
    .filter((item) => selectedKind.value === 'all' || item.kind === selectedKind.value)
    .map((item) => item.className)
  return [...new Set(list)].sort((a, b) => a.localeCompare(b))
})

watch(availableClasses, (next) => {
  if (selectedClass.value !== 'all' && !next.includes(selectedClass.value)) {
    selectedClass.value = 'all'
  }
})

watch(selectedKind, () => {
  selectedClass.value = 'all'
})

const filteredMembers = computed(() => {
  return activeMembers.value.filter((item) => {
    if (selectedKind.value !== 'all' && item.kind !== selectedKind.value) return false
    if (selectedClass.value !== 'all' && item.className !== selectedClass.value) return false
    return true
  })
})

const kindRank = (kind: Kind) => kindOrder.indexOf(kind)

const sortedFilteredMembers = computed(() => {
  return [...filteredMembers.value].sort((a, b) => {
    const classCmp = a.className.localeCompare(b.className)
    if (classCmp !== 0) return classCmp
    const kindCmp = kindRank(a.kind) - kindRank(b.kind)
    if (kindCmp !== 0) return kindCmp
    return a.displayName.localeCompare(b.displayName)
  })
})

const displayRows = computed<DisplayRow[]>(() => {
  const rows = sortedFilteredMembers.value.map((item) => ({
    ...item,
    showClass: false,
    classRowspan: 1
  }))

  for (let index = 0; index < rows.length; ) {
    const cls = rows[index].className
    let end = index + 1
    while (end < rows.length && rows[end].className === cls) {
      end += 1
    }
    rows[index].showClass = true
    rows[index].classRowspan = end - index
    index = end
  }

  return rows
})

const compareMap = computed(() => new Map(compareMembers.value.map((item) => [item.rawName, item])))
const activeMap = computed(() => new Map(activeMembers.value.map((item) => [item.rawName, item])))

const sameMemberChanged = (a: ApiMember, b: ApiMember) => {
  const aParams = JSON.stringify(a.params)
  const bParams = JSON.stringify(b.params)
  return a.summary !== b.summary || a.returns !== b.returns || a.displayName !== b.displayName || aParams !== bParams
}

const diffRows = computed<DiffRow[]>(() => {
  if (!compareEnabled.value) return []

  const keys = new Set<string>([
    ...activeMembers.value.map((item) => item.rawName),
    ...compareMembers.value.map((item) => item.rawName)
  ])

  const rows = [...keys].map((rawName) => {
    const left = activeMap.value.get(rawName) || null
    const right = compareMap.value.get(rawName) || null

    let status: DiffStatus | null = null
    if (!left && right) status = 'added'
    else if (left && !right) status = 'removed'
    else if (left && right && sameMemberChanged(left, right)) status = 'changed'
    if (!status) return null

    const source = right || left
    if (!source) return null

    if (selectedKind.value !== 'all' && source.kind !== selectedKind.value) return null
    if (selectedClass.value !== 'all' && source.className !== selectedClass.value) return null

    return {
      rawName,
      kind: source.kind,
      className: source.className,
      memberName: source.displayName,
      status,
      left,
      right
    } as DiffRow
  }).filter((item): item is DiffRow => !!item)

  return rows.sort((a, b) => {
    const classCmp = a.className.localeCompare(b.className)
    if (classCmp !== 0) return classCmp
    const kindCmp = kindRank(a.kind) - kindRank(b.kind)
    if (kindCmp !== 0) return kindCmp
    return a.memberName.localeCompare(b.memberName)
  })
})

const addedCount = computed(() => diffRows.value.filter((row) => row.status === 'added').length)
const removedCount = computed(() => diffRows.value.filter((row) => row.status === 'removed').length)
const changedCount = computed(() => diffRows.value.filter((row) => row.status === 'changed').length)

const diffStatusLabel = (status: DiffStatus) => {
  if (status === 'added') return t.value.added
  if (status === 'removed') return t.value.removed
  return t.value.changed
}

const detailText = (item: ApiMember | null) => {
  if (!item) return '—'

  const blocks = [item.summary]
  if (item.params.length) {
    blocks.push(`params: ${item.params.map((x) => `${x.name}=${x.description || '—'}`).join('; ')}`)
  }
  if (item.returns) {
    blocks.push(`returns: ${item.returns}`)
  }
  return blocks.filter(Boolean).join(' | ') || '—'
}

const kindLabel = (kind: Kind) => t.value.kindNames[kind] ?? kind

const syncData = async () => {
  loading.value = true
  error.value = ''

  try {
    const tasks: Promise<ApiMember[]>[] = [loadVersion(versionA.value)]
    if (compareEnabled.value) tasks.push(loadVersion(versionB.value))

    const [base, compare] = await Promise.all(tasks)
    activeMembers.value = base
    compareMembers.value = compare || []
  } catch (err) {
    error.value = err instanceof Error ? err.message : String(err)
    activeMembers.value = []
    compareMembers.value = []
  } finally {
    loading.value = false
  }
}

watch([versionA, versionB, compareEnabled], () => {
  void syncData()
}, { immediate: true })
</script>
