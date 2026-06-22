/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * Formspree form endpoint, e.g. "https://formspree.io/f/abcdwxyz".
   * When unset/empty, the contact form falls back to opening the visitor's mail app.
   */
  readonly VITE_FORMSPREE_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
