import { defineNuxtRouteMiddleware, navigateTo, useCookie } from "nuxt/app";

export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
      const user = useCookie('user'); // Menggunakan cookie untuk menyimpan data user
  
      // Check if the user cookie exists
      if (!user.value) {
        // Redirect to the login page if the user is not authenticated
        return navigateTo('/login', { replace: true });
      }
    }
  });