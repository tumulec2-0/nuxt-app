// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  plugins: [
    { src: '~/plugins/apexcharts.js', mode: 'client' }
  ]
})
