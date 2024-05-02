import type { User } from '~/models/user'

export default defineNuxtRouteMiddleware(() => {
  const runtimeConfig = useRuntimeConfig()

  const { isAuthenticated, user } = useSanctumAuth<User>()

  if (!isAuthenticated.value) {
    return navigateTo(runtimeConfig.public.sanctum.redirect.onAuthOnly)
  }

  if (user.value?.email_verified_at !== null) {
    return
  }

  return navigateTo('/verify-email')
})
