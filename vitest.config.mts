import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setup-test.ts',
    coverage: {
      reporter: ['text', 'lcov'],
      thresholds: {
        lines: 60,
        functions: 60,
        branches: 60,
        statements: 60,
      },
      exclude: [
        './*.config.*',
        './src/*.tsx',
        './src/*.d.ts',
        './src/coverage',
        './src/**/index.ts',
        './src/components/router',
        './src/components/layout',
      ],
    },
    alias: { '@': path.join(process.cwd(), 'src') },
  },
});
