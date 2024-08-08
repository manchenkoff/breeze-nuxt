// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: true,

  future: {
    compatibilityVersion: 4,
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    'nuxt-auth-sanctum',
    'nuxt-laravel-echo',
  ],

  vite: {
    optimizeDeps: {
      include: ['pusher-js'],
    },
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  typescript: {
    strict: true,
    typeCheck: 'build',
  },

  nitro: {
    compressPublicAssets: true,
  },

  sanctum: {
    baseUrl: 'http://localhost:80',
    redirect: {
      onGuestOnly: '/dashboard',
      onLogin: '/dashboard',
    },
  },

  echo: {
    key: '',
    scheme: 'http',
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en',
        class: 'scroll-smooth',
      },
      bodyAttrs: {
        class: 'antialiased',
      },
      link: [
        {
          rel: 'icon',
          href: '/favicon.ico',
        },
        {
          rel: 'shortcut icon',
          href: '/favicon.ico',
        },
        {
          rel: 'apple-touch-icon',
          href: '/favicon.ico',
        },
      ],
    },
  },

  compatibilityDate: '2024-07-14',
})
