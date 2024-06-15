import type { User } from '~~/models/user'

export default defineNuxtRouteMiddleware(() => {
  const sanctumConfig = useSanctumConfig()

  const { isAuthenticated, user } = useSanctumAuth<User>()

  if (!isAuthenticated.value) {
    if (sanctumConfig.redirect.onAuthOnly === false) {
      return createError({
        statusCode: 409,
        message: 'You must verify your email to access this page',
        fatal: true,
      })
    }

    return navigateTo(sanctumConfig.redirect.onAuthOnly)
  }

  if (user.value?.email_verified_at !== null) {
    return
  }

  return navigateTo('/verify-email')
})
