// https://nuxt.com/docs/api/configuration/nuxt-config
//@ts-nocheck
import tailwindForms from "@tailwindcss/forms";
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/strapi",
    "nuxt-icon",
  ],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: false,
    exposeLevel: 2,
    config: {
      theme: {
        extend: {
          colors: {
            transparent: "transparent",
            primary: "#229268",
            darkmode: "#001e3c",
            blue: "#0095c9",
            red: "#db3832",
            yellow: "#fff24b",
            black: "#000",
            white: "#fff",
            green: "#00c853",
            gray: {
              100: "#f7fafc",
              200: "#edf2f7",
              300: "#e2e8f0",
              400: "#cbd5e0",
              500: "#a0aec0",
              600: "#718096",
              700: "#4a5568",
              800: "#2d3748",
              900: "#1a202c",
            },
          },
        },
      },
      plugins: [tailwindForms],
    },
    injectPosition: "first",
    viewer: true,
  },

  // pinia config
  pinia: {
    autoImports: [
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

  // strapi config
  strapi: {
    url: process.env.STRAPI_URL || "https://cnac.mechacktambwe.com",
    prefix: "/api",
    version: "v4",
    cookie: {},
    cookieName: "strapi_jwt",
  },
});
