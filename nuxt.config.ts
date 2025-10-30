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

  compatibilityDate: '2025-10-01',

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

  // Remove once issue is fixed
  // https://github.com/nuxt/nuxt/issues/33582
  hooks: {
    'vite:extendConfig': function (config: import('vite').UserConfig) {
      function isPlugin(plugin: unknown, name: string): plugin is import('vite').Plugin {
        return !!(plugin && typeof plugin === 'object' && 'name' in plugin && plugin.name === name)
      }

      const plugin = config.plugins?.find(plugin => isPlugin(plugin, 'nuxt:environments'))

      if (plugin) {
        plugin.enforce = 'pre'
      }
    },
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
    baseUrl: 'http://localhost:80',
    redirect: {
      onGuestOnly: '/dashboard',
      onLogin: '/dashboard',
    },
  },
})
