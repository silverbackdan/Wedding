module.exports = {
  performance: {
    gzip: true
  },
  /**
   * Headers of the page
   */
  head: {
    titleTemplate: '%s - Suzanne and Daniel\'s Wedding 2018',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  /**
   * Global CSS
   */
  css: ['~/assets/css/main.sass'],
  /**
   * Add axios globally
   */
  build: {
    vendor: ['axios', 'lodash'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options : {
            fix : true
          }
        })
      }
    }
  },
  /**
   * Cache settings
   */
  cache: true,
  plugins: [
    { src: '~/plugins/vue-scrollto.js', ssr: false },
    { src: '~/plugins/fontawesome', ssr: true }
  ],
  /**
   * Modules
   */
  modules: [
    '@nuxtjs/component-cache',
    [
      '@nuxtjs/pwa',
      {
        icon: {
          iconSrc: 'static/icons/bw-logo-1024x1024.png',
          sizes: [1024, 512, 144]
        },
        manifest: true,
        meta: false,
        workbox: {
          runtimeCaching: [
            {
              urlPattern: process.env.API_URL_BROWSER + '/.*',
              handler: 'networkFirst',
              method: 'GET'
            }
          ]
        },
        optimize: {
          cssnano: {
            zindex: false
          }
        }
      }
    ],
    [
      '@nuxtjs/axios',
      {
        credentials: true,
        debug: false
      }
    ]
  ],
  /**
   * Manifest for mobile app
   */
  manifest: {
    name: 'Wedding 2018',
    short_name: 'Wedding 2018',
    description: 'Suzanne and Daniel\'s Wedding 9th June 2018',
    lang: 'en',
    background_color: '#FFFFFF',
    theme_color: '#4770fb'
  }
}
