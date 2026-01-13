import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "core-api": path.resolve(__dirname, "../../packages/core/api.ts"),
      "core-model": path.resolve(__dirname, "../../packages/core/model.ts"),
      "core-store": path.resolve(__dirname, "../../packages/core/store.ts"),
      "core-context": path.resolve(__dirname, "../../packages/core/context.ts")
    }
  }
})
