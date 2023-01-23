import { defineConfig } from "vite";
// import VueTypeImports from "vite-plugin-vue-type-imports";
import VueMacros from "unplugin-vue-macros/vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VueMacros({ plugins: { vue: vue() } })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
