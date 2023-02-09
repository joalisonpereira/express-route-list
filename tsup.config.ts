import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src', '!src/**/*.spec.*', '!src/tests/**', '!src/@types/**.d.ts'],
  splitting: false,
  sourcemap: false,
  clean: false,
  dts: true
});
