import { resolve } from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      reporter: ['text', 'html', 'text-summary'],
      src: ['pkg/']
    },
    includeSource: ['pkg/**/*.{ts,mts,cts}'],
    dir: 'pkg/test/'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'pkg/')
    }
  }
})
