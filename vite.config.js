import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ['all'], // This forces Vite to use https://localhost
  },
  base: './', // Important: tells Vite to use relative paths
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        // This keeps filenames simple (e.g., index.js instead of index-d82f3.js)
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  }
})
