/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENABLE_LAZY_IMAGES?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
