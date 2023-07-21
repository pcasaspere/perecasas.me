// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxt/image",
    "nuxt-simple-sitemap",
  ],
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
});
