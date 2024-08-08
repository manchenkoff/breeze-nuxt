import type { FetchContext } from 'ofetch'
import type { ConsolaInstance } from 'consola'
import type { NuxtApp } from '#app'

export default defineAppConfig({
  ui: {
    primary: 'red',
    gray: 'neutral',
  },

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

        // Redirect to maintenance page if the server is down
        if (ctx.response?.status === 503) {
          app.runWithContext(async () => {
            const currentRoute = app.$router.currentRoute.value.path.replace(/\/$/, '')
            const maintenanceRoute = '/maintenance'

            if (currentRoute === maintenanceRoute) {
              return
            }

            await navigateTo(maintenanceRoute, { external: true })
          })
        }
      },
    },
  },
})
