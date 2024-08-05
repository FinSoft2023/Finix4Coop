import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'bigplatdefibp',
      fileName: (format) =>
        `bigplatdefibp.${format}${format === 'cjs' ? '' : '.js'}`,
      formats: ['es', 'cjs', 'umd'],
    },
  },
});
