console.log(process.env.NODE_ENV);

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxt/image", "@nuxtjs/sitemap", "nuxt-gtag"],

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

  gtag: {
    enabled: process.env.NODE_ENV === 'production',
    id: 'G-8MP4EK2JES'
  },

  compatibilityDate: "2024-07-10",
});