// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/a11y',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@ant-design-vue/nuxt',
    '@antdv-next/nuxt',
    '@artmizu/nuxt-prometheus',
    '@askdoppler/nuxt',
    '@atoms-studio/nuxt-swiftsearch',
    '@comark/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/html-validator',
    'nuxt-studio',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  studio: {
    repository: {
      provider: 'github',
      owner: 'AlanKing82',
      repo: 'your-repo',
      branch: 'main'
    }
  }
})