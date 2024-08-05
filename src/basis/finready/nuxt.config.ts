// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['../../themes/theme-fin'],
  runtimeConfig: {
    apiServer: {
      baseURL: 'http://localhost:3086',
    },
  },
});
