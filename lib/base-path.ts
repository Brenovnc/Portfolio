// Mesmo basePath configurado em next.config.mjs (GitHub Pages em produção).
export const BASE_PATH =
  process.env.NODE_ENV === 'production' ? '/Portfolio' : ''
