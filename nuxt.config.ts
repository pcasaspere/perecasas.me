export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxt/image", "@nuxtjs/sitemap"],

  runtimeConfig: {
    public: {
      isProduction: process.env.NODE_ENV === "production",
    },
  },

  app: {
    head: {
      script: [
        {
          src: "https://asset-tidycal.b-cdn.net//js/embed.js",
        },
      ],
    },
  },

  site: {
    url: "https://perecasas.me",
  },

  routeRules: {
    '/': { prerender: true },
    '/blog': { prerender: true }
  },

  compatibilityDate: "2024-07-10",
});