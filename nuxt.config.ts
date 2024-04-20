// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@nuxt/eslint", "nuxt-auth-sanctum"],

  eslint: {
    config: {
      stylistic: true,
    },
  },

  sanctum: {
    baseUrl: "http://localhost:80",
  },
});
