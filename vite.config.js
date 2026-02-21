import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages: use '/' for user site (username.github.io)
export default defineConfig({
  plugins: [react()],
  base: '/',
})
