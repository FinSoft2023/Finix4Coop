// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['../../basis/basencore', '@nuxt/ui-pro'],
  modules: ['@nuxt/ui'],
  ui: {
    icons: ['mdi', 'logos'],
  },
});
