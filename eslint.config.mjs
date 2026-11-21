import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    rules: {
      // Leitura de localStorage após a montagem (evita divergência de hidratação na exportação estática).
      'react-hooks/set-state-in-effect': 'off',
      // Exportação estática com images.unoptimized: <img> comum é suficiente.
      '@next/next/no-img-element': 'off',
    },
  },
  { ignores: ['.next/**', 'out/**', 'node_modules/**', 'next-env.d.ts'] },
]

export default eslintConfig
