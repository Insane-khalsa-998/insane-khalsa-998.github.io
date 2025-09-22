import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/insane-khalsa-998.github.io/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]'
      }
    }
  },
  optimizeDeps: {
    exclude: ['@lottiefiles/dotlottie-react']
  },
  assetsInclude: ['**/*.lottie'],
  server: {
    host: true,
    port: 5173,
    strictPort: true
  }
})
