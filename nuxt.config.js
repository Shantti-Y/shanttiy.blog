const webpack = require('webpack')
const axios = require('axios')
const isProd = process.env.NODE_ENV === 'production'
const apiUrl = isProd ? 'https://gravurechannel.com:3000' : 'http://localhost:3000'
const rootUrl = isProd ? 'https://gravurechannel.com' : 'http://localhost:8080'

module.exports = {
  head: {
    title: 'Shanttiy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  env: {
    rootUrl: rootUrl,
    apiUrl: apiUrl,
    isProd: isProd
  },
  loading: { color: '#3B8070' },
  build: {
    extractCSS: false,
    vendor: ['axios', '~/plugins/collection.ts', 'babel-polyfill'],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  loaders: {
    scss: {
      indentedSyntax: true
    }
  },
  modules: [
    ['@nuxtjs/component-cache', {
      max: 10000,
      maxAge: 1000 * 60 * 60 * 3
    }],
    ['@nuxtjs/moment', ['ja', 'zh-cn']],
    'nuxt-sass-resources-loader',
  ],
  sassResources: [
    '@/assets/stylesheets/_reset.scss',
    '@/assets/stylesheets/_variables.scss',
    '@/assets/stylesheets/_fonts.scss'
  ],
  mode: 'universal',
  watchers: {
    webpack: {
      aggregateTimeout: 300,
      poll: 1000,
      ignored: /node_modules/
    }
  }
}

