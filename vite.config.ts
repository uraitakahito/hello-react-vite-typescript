import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        button: resolve(__dirname, 'src/button/index.html'),
      },
    },
    minify: false,
  },
  plugins: [react()],
})
