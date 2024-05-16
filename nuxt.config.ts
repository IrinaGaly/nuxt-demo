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
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
  colorMode: {
    classSuffix: "",
  },
  content: {
    highlight: {
      theme: "github-dark",
      preload: ["vue"],
    },
    navigation: {
      fields: ["home", "about", "users"],
    },
  },
});
