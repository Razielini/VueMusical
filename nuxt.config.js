import fs from 'fs'
import path from 'path'
import colors from 'vuetify/es5/util/colors'

const SRC_DIR = ''
const COMPONENTS_DIR = 'components'

const srcPath = path.resolve(__dirname, SRC_DIR)
const componentDirs = fs.readdirSync(path.join(srcPath, COMPONENTS_DIR))
const foundComponents = {}

export default {
  mode: 'universal',
  srcDir: SRC_DIR,
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/i18n.js',
    '~/plugins/vuetify.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxt/typescript-build'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: '#4b5d8e',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: '#4b5d8e',
          info: '#1b2236',
          secondary: '#d4d9e4',
          error: '#dc495b'
        }
      }
    },
    icons: {
      iconfont: 'mdi'
    },
    treeShake: {
      directives: [
        'Resize'
      ],
      loaderOptions: {
        /**
         * This function will be called for every tag used in each vue component
         * It should return an array, the first element will be inserted into the
         * components array, the second should be a corresponding import
         *
         * originalTag - the tag as it was originally used in the template
         * kebabTag    - the tag normalised to kebab-case
         * camelTag    - the tag normalised to PascalCase
         * path        - a relative path to the current .vue file
         * component   - a parsed representation of the current component
         */
        match (originalTag, { kebabTag, camelTag }) {
          if (kebabTag in foundComponents) {
            return foundComponents[kebabTag]
          }

          const parts = kebabTag.split('-')

          if (parts.length > 1 && componentDirs.includes(parts[0])) {
            for (let i = 1; i < parts.length; i++) {
              const pathPart = parts.slice(0, i)
              const filePart = parts.slice(i)

              const relPath = path.join(COMPONENTS_DIR, ...pathPart, camelTag.substr(-filePart.join('').length))

              const existsJs = fs.existsSync(path.join(srcPath, `${relPath}.js`))
              const existsVue = fs.existsSync(path.join(srcPath, `${relPath}.vue`))

              if (existsJs || existsVue) {
                const ret = [
                  camelTag,
                  `import ${camelTag} from '@/${relPath}'`
                ]

                foundComponents[kebabTag] = ret

                return ret
              }
            }
          }
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here

    extend (config, ctx) {
    }
    */
  },
  typescript: {
    typeCheck: {
      eslint: false
    }
  },
  server: {
    port: process.env.BASE_PORT | 4000 // default: 3000
  }
}
