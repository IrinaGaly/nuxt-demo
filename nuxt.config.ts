// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
    componentInspector: { enabled: true },
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxt/devtools"],
  pinia: {
    autoImports: ["defineStore"],
  },
  imports: {
    dirs: ["./stores"],
  },
});
