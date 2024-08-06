// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: [
    '../../basis/finready',
    '../../modules/mdulwithdraw',
    '../../modules/mdulcheque',
    '../../modules/mdulfinance',
    '../../modules/mdulaccounting',
    '../../modules/mdulregmember',
  ],
});
