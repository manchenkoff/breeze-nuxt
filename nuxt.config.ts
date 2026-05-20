// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    'nuxt-auth-sanctum',
    'nuxt-laravel-echo',
    'nuxt-sanctum-precognition',
  ],

  ssr: true,
  devtools: { enabled: true },

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

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2026-03-01',

  nitro: {
    compressPublicAssets: true,
  },

  vite: {
    optimizeDeps: {
      include: ['nuxt-laravel-echo > pusher-js'],
    },
  },

  typescript: {
    strict: true,
    typeCheck: 'build',
  },

  echo: {
    key: '',
    scheme: 'http',
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  sanctum: {
    baseUrl: '/api/sanctum',
    redirect: {
      onGuestOnly: '/dashboard',
      onLogin: '/dashboard',
    },
    serverProxy: {
      enabled: true,
      baseUrl: 'http://localhost:80',
      route: '/api/sanctum',
    },
  },
})
