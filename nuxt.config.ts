export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      games: process.env.NUXT_GAMES || "",
      detail_game: process.env.NUXT_DETAIL_GAMES || "",
    }
  }
})
