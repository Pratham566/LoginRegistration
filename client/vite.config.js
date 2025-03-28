import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
  // vite.config.js
  export default {
    build: {
      outDir: 'dist', // Ensure this matches Vercel's expected output directory
    },
  };
