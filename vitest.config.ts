import { defineConfig } from 'vite';
import path from 'node:path';

export default defineConfig({
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src')
    }
  }
});
