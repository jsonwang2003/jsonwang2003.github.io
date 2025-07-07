import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   plugins: [react()],
   base: '/',
   build: {
      // Optimize bundle size
      rollupOptions: {
         output: {
            manualChunks: {
               // Separate vendor chunks
               vendor: ['react', 'react-dom'],
               mui: ['@mui/material', '@emotion/react', '@emotion/styled'],
               router: ['react-router-dom'],
            },
         },
      },
      // Reduce chunk size warnings
      chunkSizeWarningLimit: 1000,
      // Enable source maps for debugging but compress
      sourcemap: false,
      // Use default minifier (esbuild) which is faster and included
      minify: 'esbuild',
   },
})
