// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  //...
  css: ['@/assets/scss/global.scss'],
  build: {
    transpile: ['vuetify']
  },
  modules: [
    (_options: any, nuxt: { hooks: { hook: (arg0: string, arg1: (config: any) => void) => void } }) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@nuxtjs/stylelint-module',
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
      },
    ]
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    }
  }
})
