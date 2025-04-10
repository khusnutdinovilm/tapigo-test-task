import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],

  server: {
    host: "0.0.0.0",
    port: 5173,
  },

  base: process.env.NODE_ENV === "production" ? "/tapigo-test-task/" : "/",

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "components/": fileURLToPath(new URL("./src/components", import.meta.url)),
      "services/": fileURLToPath(new URL("./src/services", import.meta.url)),
      "stores/": fileURLToPath(new URL("./src/stores", import.meta.url)),
    },
  },
});
