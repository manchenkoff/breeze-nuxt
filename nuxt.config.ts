// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxt/ui', '@nuxt/eslint', 'nuxt-auth-sanctum'],

  eslint: {
    config: {
      stylistic: true,
    },
  },

  typescript: {
    strict: true,
    typeCheck: 'build',
  },

  ui: {
    icons: ['heroicons'],
  },

  sanctum: {
    baseUrl: 'http://localhost:80',
  },
})
