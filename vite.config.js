import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://gh-2018-prod.github.io/mntcrv3/',
  plugins: [react()],
})