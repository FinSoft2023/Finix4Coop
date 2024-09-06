// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  extends: ['../../basis/finready', '../../modules/mdulloanfastmember'],

  nitro: {
    firebase: {
      gen: 2,
    },
  },
});
