import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
proxy: {
  '/api': 'http://localhost:4001',
  '/user': 'http://localhost:4001',
},
  },
  plugins: [react()],
})
