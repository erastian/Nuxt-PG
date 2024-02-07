import { useSessionStore } from '#imports'

const sessionStore = useSessionStore()
await sessionStore.getUser()
export default defineNuxtRouteMiddleware(() => {
  if (!sessionStore.isAuth) {
    return navigateTo({ name: 'auth', query: { t: 'login' } })
  }
  if (sessionStore.userRole !== 'ADMIN') {
    return navigateTo({ name: 'index' })
  }
})
