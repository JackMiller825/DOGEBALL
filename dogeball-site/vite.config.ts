import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Project Pages is served at /DOGEBALL/. Local and other hosts stay at /.
  base: process.env.GITHUB_PAGES === "true" ? "/DOGEBALL/" : "/",
})
