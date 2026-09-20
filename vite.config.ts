import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      'src': fileURLToPath(new URL('src', import.meta.url)),
      '@': fileURLToPath(new URL('./', import.meta.url))
    }
  }
});
