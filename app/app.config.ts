import type { FetchContext } from 'ofetch'
import type { ConsolaInstance } from 'consola'
import type { NuxtApp } from '#app'

export default defineAppConfig({
  ui: {
    primary: 'red',
    gray: 'neutral',
  },

  // fix for the type check error
  nuxtIcon: {},

  siteTitle: 'ProjectName',

  sanctum: {
    interceptors: {
      onRequest: async (
        app: NuxtApp,
        ctx: FetchContext,
        logger: ConsolaInstance,
      ) => {
        logger.debug(`custom onRequest interceptor (${ctx.request})`)
      },

      onResponse: async (
        app: NuxtApp,
        ctx: FetchContext,
        logger: ConsolaInstance,
      ) => {
        logger.debug(`custom onResponse interceptor (${ctx.request})`)
      },
    },
  },
})
