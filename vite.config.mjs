import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  // Tailwind runs as a Vite plugin. Skip PostCSS config discovery in parent directories.
  css: { postcss: { plugins: [] } },
})

