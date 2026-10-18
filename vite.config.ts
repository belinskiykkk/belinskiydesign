import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Относительные пути к ассетам: сайт работает и в подпапке (GitHub Pages), и в корне (Vercel)
  base: './',
  plugins: [react(), tailwindcss()],
})
