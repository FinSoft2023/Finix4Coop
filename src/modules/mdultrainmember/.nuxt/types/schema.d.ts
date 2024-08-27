import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["uiPro"]?: typeof import("D:/workspace/Finix4CoopTest/src/node_modules/.pnpm/@nuxt+ui-pro@1.2.0_axios@1.6.8_focus-trap@7.5.4_magicast@0.3.4_nuxt@3.11.2_@opentelemetry+api_6v2gmhh5m77jegvtuvk6akqssu/node_modules/@nuxt/ui-pro/modules/pro/index").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["icon"]?: typeof import("nuxt-icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["colorMode"]?: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["ui"]?: typeof import("@nuxt/ui").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["D:/workspace/Finix4CoopTest/src/node_modules/.pnpm/@nuxt+ui-pro@1.2.0_axios@1.6.8_focus-trap@7.5.4_magicast@0.3.4_nuxt@3.11.2_@opentelemetry+api_6v2gmhh5m77jegvtuvk6akqssu/node_modules/@nuxt/ui-pro/modules/pro/index", Exclude<NuxtConfig["uiPro"], boolean>] | ["nuxt-icon", Exclude<NuxtConfig["icon"], boolean>] | ["@nuxtjs/color-mode", Exclude<NuxtConfig["colorMode"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@nuxt/ui", Exclude<NuxtConfig["ui"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   apiServer: {
      baseURL: string,
   },
  }
  interface PublicRuntimeConfig {

  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }