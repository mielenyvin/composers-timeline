import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  envPrefix: ["VITE_", "SOUND_CLOUD_", "SOUNDCLOUD_"],
  server: {
    proxy: {
      "/api/soundcloud": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },
})
