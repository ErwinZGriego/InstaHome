import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // When using a custom domain (instahome.casa), the base should be '/'
  base: '/',
})