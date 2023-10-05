import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '127.0.0.1', // listen on all addresses
    port: 8080,
  },
  plugins: [vue()],
})
