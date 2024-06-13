// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
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
  app: {
    head: {
      title: "Nuxt Demo App",
      meta: [{ name: "description", content: "Everything about Nuxt 3" }],
      // link: [
      //   {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      // ]
    },
  },
  runtimeConfig: {
    apiKey: process.env.API_KEY,
  },
  routeRules: {
    // "/users": { ssr: false },
    // "/users": { isr: true },
    // "/isr_ttl": { isr: 60 }, // Incremental static Regenreation[time to live]
    // "/isr_no_ttl": { isr: true }, // Incremental static Regenreation[no time to live]
    // "/swr_ttl": { swr: 60 }, // Stale while revalidate[time to live]
    // "/swr_no_ttl": { swr: true }, // Stale while revalidate[no time to live]
    // "/ssg": { prerender: true }, // static site generation
    // "/spa": { ssr: false }, // server side rendering
  },
});
