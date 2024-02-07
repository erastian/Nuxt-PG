import { resolve } from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    '@': resolve(__dirname, './')
  },
  css: ['~/assets/styles/main.scss'],
  devtools: {
    enabled: true
  },
  devServer: {
    port: 5173
  },
  vite: {
    build: {
      target: 'esnext'
    }
  },
  nitro: {
    esbuild: {
      options: {
        target: 'esnext'
      }
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@pinia/nuxt',
    '@nuxtjs/eslint-module',
    'nuxt-snackbar'
  ],
  eslint: {},
  runtimeConfig: {
    app: {
      GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
      AUTH_SECRET: process.env.AUTH_SECRET
    },
    public: {
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
      API_URL: process.env.VITE_API_URL
    }
  },
  routeRules: {
    '/dashboard/**': { ssr: false }
  },
  tailwindcss: {
    configPath: '~/tailwind.config.ts'
  },
  snackbar: {
    top: true,
    duration: 5000
  }
})
