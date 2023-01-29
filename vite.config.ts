/// <reference types="vitest" />
import { defineConfig } from "vite";
import VueMacros from "unplugin-vue-macros/vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import ElementPlus from "unplugin-element-plus/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VueMacros({ plugins: { vue: vue() } }), ElementPlus()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    css: false,
  },
});
