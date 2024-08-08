// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['../../basis/finready'],

  nitro: {
    firebase: {
      gen: 2,
    },
  },
});
