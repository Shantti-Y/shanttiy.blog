const webpack = require('webpack');
const axios = require('axios');
const isProd = process.env.NODE_ENV === 'production';
const apiUrl = 'https://api.shanttiy-blog.com/wp-json/wp/v2/';
const rootUrl = isProd ? 'https://shanttiy-blog.com' : 'http://localhost:3000';

module.exports = {
  head: {
    title: 'Shanttiy Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'twitter:card', value: 'summary_large_image' },
      { name: 'twitter:site', value: '@Shantti_Y' },
      { name: 'twitter:creator', value: '@Shantti_Y' },
      // twitter:title, twitter:description, twitter:image
      { name: 'og:site_name', content: 'shanttiy blog' },
      { name: 'og:type', content: 'website' },
      // og:description, og:image
      { hid: 'description', name: 'description', content: 'Webエンジニアの技術情報、英語学習や音楽などの趣味を中心に思ったことを発信。知見や思ったことをアウトプットする為のブログです。' },
      { meta: 'keywords', content: 'Ruby,JavaScript,TypeScript,Kotlin,Ruby on Rails,プログラミング,スキルアップ,英語,学習,会社,悩み,孤独' },
      { rel: 'canonical', href: rootUrl }
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
    ['@nuxtjs/moment', ['ja', 'zh-cn']],
    'nuxt-sass-resources-loader',
  ],
  plugins: [
    '@/plugins/sanitize-html'
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
  },
  generate: {
    interval: 1000,
    routes(callback){
      axios.get(`${apiUrl}posts?per_page=100&page=1`)
        .then(res => {
          const routes = res.data.map(post => `/posts/${post.id}`)
          callback(numm, routes)
        })
        .catch(callback)
    }
  }
}

