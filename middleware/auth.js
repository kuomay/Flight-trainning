export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
      if (!window.localStorage.getItem('isLoggedIn')) {
        return navigateTo('/login')
      }
    }
  })