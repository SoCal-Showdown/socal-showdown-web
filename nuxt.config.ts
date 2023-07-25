// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/socal-showdown-web/",
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  css: ["@/assets/css/main.css"],
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
  },
  target: "static",
  router: {
    base: "/socal-showdown-web/",
  },
});
