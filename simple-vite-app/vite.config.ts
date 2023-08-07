import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
import { splitVendorChunkPlugin} from "vite";
import legacy from "@vitejs/plugin-legacy"
import { VitePWA } from 'vite-plugin-pwa'
import myPlugin from "./plugins/my-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      splitVendorChunkPlugin(),
      legacy({
        targets: ["defaults", "not IE 11"]
      }),
      VitePWA(),
      myPlugin()
  ],
  build: {
    target: "es2015",
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        another: resolve(__dirname, 'another-route/index.html'),
      },
    },
  },
})
