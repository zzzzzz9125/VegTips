/**
 * Vite plugin that transforms TypeScript generic syntax in
 * vitepress-plugin-pagefind Vue SFCs into runtime JavaScript equivalents.
 *
 * Background: vitepress-plugin-pagefind ships raw .vue source files that use
 * `defineProps<T>()` / `defineEmits<T>()` with imported TypeScript interfaces.
 * VitePress v2 (Vite 7 + Rolldown) runs @vue/compiler-sfc in a context where
 * type-only imports cannot be resolved via fs access. This plugin converts the
 * generic syntax to standard runtime option syntax at build time — no patching
 * of node_modules required.
 *
 * @see https://vuejs.org/guide/typescript/composition-api.html#typing-component-props
 */

import type { Plugin } from 'vite'

// ---------------------------------------------------------------------------
// Replacements for specific files.
// Each entry is [filename, { from: exact_source_text, to: replacement }].
// We match on the filename stem (e.g. "CommandGroup.vue") so the plugin
// is insensitive to the full path.
// ---------------------------------------------------------------------------

interface Replacement {
  from: string
  to: string
}

const REPLACEMENTS: Record<string, Replacement[]> = {
  'CommandGroup.vue': [
    {
      from: `import { computed } from 'vue'

import { createId } from './utils'
import type { CommandGroupProps } from './types'

defineOptions({
  name: 'Command.Group',
})

defineProps<CommandGroupProps>()`,
      to: `import { computed } from 'vue'

import { createId } from './utils'

defineOptions({
  name: 'Command.Group',
})

defineProps({
  heading: String,
})`,
    },
  ],

  'CommandRoot.vue': [
    {
      from: `import { nextTick, onMounted, provide, ref, watch } from 'vue'

import { useCommandState } from './useCommandState'
import { useCommandEvent } from './useCommandEvent'
import { findNextSibling, findPreviousSibling } from './utils'
import type { CommandRootEmits, CommandRootProps } from './types'

defineOptions({
  name: 'Command.Root',
})

const props = withDefaults(defineProps<CommandRootProps>(), {
  theme: 'default',
})

const emit = defineEmits<CommandRootEmits>()`,
      to: `import { nextTick, onMounted, provide, ref, watch } from 'vue'

import { useCommandState } from './useCommandState'
import { useCommandEvent } from './useCommandEvent'
import { findNextSibling, findPreviousSibling } from './utils'

defineOptions({
  name: 'Command.Root',
})

const props = defineProps({
  theme: { type: String, default: 'default' },
})

const emit = defineEmits(['selectItem'])`,
    },
  ],

  'CommandInput.vue': [
    {
      from: `import type { CommandInputEmits, CommandInputProps } from './types'
import { useCommandState } from './useCommandState'

defineOptions({
  name: 'Command.Input',
})

defineProps<CommandInputProps>()

const emit = defineEmits<CommandInputEmits>()`,
      to: `import { useCommandState } from './useCommandState'

defineOptions({
  name: 'Command.Input',
})

defineProps({
  placeholder: String,
  value: String,
})

const emit = defineEmits(['input', 'update:value'])`,
    },
  ],

  'CommandItem.vue': [
    {
      from: `import { useCommandState } from './useCommandState'
import { useCommandEvent } from './useCommandEvent'
import { createId } from './utils'
import type { CommandItemEmits, CommandItemProps } from './types'

defineOptions({
  name: 'Command.Item',
})

const props = defineProps<CommandItemProps>()

const emit = defineEmits<CommandItemEmits>()`,
      to: `import { useCommandState } from './useCommandState'
import { useCommandEvent } from './useCommandEvent'
import { createId } from './utils'

defineOptions({
  name: 'Command.Item',
})

const props = defineProps({
  shortcut: Array,
  perform: Function,
})

const emit = defineEmits(['select'])`,
    },
  ],

  'CommandList.vue': [
    {
      from: `defineProps<{
  emptyText?: string
}>()`,
      to: `defineProps({
  emptyText: String,
})`,
    },
  ],

  'CommandDialog.vue': [
    {
      from: `import Command from './CommandRoot.vue'
import { useCommandState } from './useCommandState'
import { useCommandEvent } from './useCommandEvent'
import type { ItemInfo } from './types'

defineOptions({
  name: 'Command.Dialog',
})

const props = defineProps<{
  visible: boolean
  theme: string
}>()

const emit = defineEmits<{
  (e: 'selectItem', item: ItemInfo): void
}>()`,
      to: `import Command from './CommandRoot.vue'
import { useCommandState } from './useCommandState'
import { useCommandEvent } from './useCommandEvent'

defineOptions({
  name: 'Command.Dialog',
})

const props = defineProps({
  visible: Boolean,
  theme: String,
})

const emit = defineEmits(['selectItem'])`,
    },
  ],
}

// ---------------------------------------------------------------------------
// Plugin
// ---------------------------------------------------------------------------

export function transformPagefindSfc(): Plugin {
  // Track which files we've already transformed (idempotency).
  const transformed = new Set<string>()

  return {
    name: 'transform-pagefind-sfc',
    enforce: 'pre', // Run before the official Vue plugin

    transform(code, id) {
      // Only process .vue files from the pagefind plugin's command-palette
      if (!id.includes('vitepress-plugin-pagefind')) return
      if (!id.endsWith('.vue')) return

      // Prevent double-processing
      if (transformed.has(id)) return

      const filename = id.replace(/\\/g, '/').split('/').pop()!
      const fileReplacements = REPLACEMENTS[filename]
      if (!fileReplacements) return

      let transformedCode = code

      for (const { from, to } of fileReplacements) {
        if (transformedCode.includes(to)) {
          // Already transformed — skip
          continue
        }
        if (transformedCode.includes(from)) {
          transformedCode = transformedCode.replace(from, to)
        }
      }

      // Only mark as transformed if we actually changed something
      if (transformedCode !== code) {
        transformed.add(id)
        return { code: transformedCode, map: null }
      }
    },
  }
}
