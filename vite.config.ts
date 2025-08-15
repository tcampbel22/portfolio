import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    exclude: ['v86'] // Exclude v86 from Vite's dependency pre-bundling
  },
  base: '/',
  server: {
    fs: {
      allow: ['..'] // Allow serving files from parent directories if needed
    }
  }
});
