export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('sanctum:request', (app, ctx, logger) => {
    logger.debug(`custom onRequest interceptor (${ctx.request})`)
  })

  nuxtApp.hook('sanctum:response', async (app, ctx, _) => {
    // Redirect to the maintenance page if the server is down
    if (ctx.response?.status === 503) {
      await app.runWithContext(async () => {
        const currentRoute = app.$router.currentRoute.value.path.replace(/\/$/, '')
        const maintenanceRoute = '/maintenance'

        if (currentRoute === maintenanceRoute) {
          return
        }

        await navigateTo(maintenanceRoute, { external: true })
      })
    }
  })
})
