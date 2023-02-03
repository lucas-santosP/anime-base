const lifecycle = process.env.npm_lifecycle_event;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Anime Base",
      meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  typescript: {
    shim: false,
    strict: true,
  },

  imports: {
    dirs: [
      // Scan top-level modules
      "composables",
      "queries",
      "utils/tw",
    ],
  },
  components: [
    {
      path: "~/components/",
      pathPrefix: true,
    },
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["@/assets/styles/global.scss"],
  modules: ["@vue-macros/nuxt", "@element-plus/nuxt", "@nuxt/image-edge"],
  macros: {},
  elementPlus: {},

  build: {
    transpile: lifecycle === "build" ? ["element-plus"] : [],
  },

  vite: {
    devBundler: "legacy",
  },
});
