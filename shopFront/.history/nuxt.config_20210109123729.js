import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - shopFront',
    title: 'shopFront',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/vuetify.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/auth',
    '@nuxtjs/axios',
  ],


  /*
   ** auth module configuration
   */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'api/panel/auth/login',
            method: 'post',
            propertyName: 'token'
          },
          register: {
            url: 'api/panel/auth/register',
            method: 'post',
          },
          user: {
            url: 'api/panel/auth/user',
            method: 'get',
            propertyName: 'data'
          },
          logout: {
            url: 'api/panel/auth/logout',
            method: 'get',
            propertyName: false
          },
          tokenRequired: true,
          tokenType: 'Bearer'
        }
      }
    }
  },

 // axios module configuration
  axios: {
    credentials: true,
    progress: true,
    proxy: true
  },

// axios proxy configuration
  proxy: {
    '/api': {
      target: 'http://localhost:8000/api',
      pathRewrite: {
        '^/api/': ''
      }
    }
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }


}
