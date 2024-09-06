// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  extends: [
    '../../basis/finready',
    '../../modules/mdulwithdraw',
    '../../modules/mdulcheque',
    '../../modules/mdulfinance',
    '../../modules/mdulaccounting',
    '../../modules/mdulregmember',
    '../../modules/mdulque',
    '../../modules/mdulofficer',
  ],

  nitro: {
    firebase: {
      gen: 2,
    },
  },
});
