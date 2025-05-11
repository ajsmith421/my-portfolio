import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    port: 5173,
    allowedHosts: ['5173-ajsmith421-myportfolio-3v6etbxk6kb.ws-us118.gitpod.io'],
  },
})
