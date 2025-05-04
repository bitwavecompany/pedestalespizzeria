/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom'
  },
  css: {
    postcss: {
      // ... configuración existente ...
    },
    // Configuración específica para la minificación CSS
    preprocessorOptions: {
      scss: {
        // Opciones si usas SCSS
      },
    },
    // Opciones de minificación
    devSourcemap: true,
  },
})
