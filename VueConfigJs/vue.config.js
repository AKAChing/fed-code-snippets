const isProduction = process.env.NODE_ENV === 'production'

const cdn = { // 要引入的CDN地址
  css: [ // 这里为需要通过CDN引入的CSS文件
    'https://cdn.jsdelivr.net/npm/vant@2.2/lib/index.css'
  ],
  js: [ // 这里为需要通过CDN引入的JS文件
    'https://cdn.staticfile.org/vue/2.6.10/vue.min.js',
    'https://cdn.staticfile.org/vue-router/3.1.3/vue-router.min.js',
    'https://cdn.staticfile.org/vuex/3.1.1/vuex.min.js',
    'https://cdn.staticfile.org/axios/0.19.0-beta.1/axios.min.js'
  ]
}

module.exports = {
  productionSourceMap: false, // 是否开启sourcemap
  devServer: {
    port: 8080, // 本地服务器端口
    open: false, // 启动项目时是否自动开启浏览器
    // proxy: { // 跨域配置
    //   [process.env.VUE_APP_API_URL]: {
    //     target: process.env.VUE_APP_API_URL,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       [process.env.VUE_APP_API_URL]: ''
    //     }
    //   }
    // }
  },

  // 配置全局sass mixins
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "~@/style/mixins.scss";\n                      @import "~@/style/variables.scss";',
      }
    },
  },

  configureWebpack: config => {
    // 生产环境执行对应操作
    if ( isProduction ) {
      // 禁止webpack打包的资源
      config.externals = {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'vuex': 'Vuex',
        'axios': 'axios'
      }
      // 去除console
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }
  },

  chainWebpack: config => {
    // 生产环境下HTML动态注入CDN
    if ( isProduction ) {
      config.plugin('html')
      .tap( args => {
        args[0].cdn = cdn;
        return args;
      })
    }

    // 设置base64图片规则 
    config.module
    .rule('images')
      .use('url-loader')
        .loader('url-loader')
        .tap(options => Object.assign(options, { limit: 1 })) // 这里选择不转base64 因为发现图片过多最终字符过长导致体积更大
  }
}