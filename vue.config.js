const path = require('path')
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: './build',
  // publicPath: './',
  // devServer: {
  //   proxy: {
  //     "/api": {
  //       target: "http://152.136.185.210:4000/",
  //       pathRewrite: {
  //         "^/api": ""
  //       },
  //       ws: true,
  //       changeOrigin: true
  //     }
  //   }
  // },
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       views: "@/views"
  //     }
  //   }
  // }
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     views: '@/views'
  //   }
  // },
  chainWebpack: (config) => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src')).set('views', '@/views')
  }
})

module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-vue-components/webpack')({
        /* options */
      }),
      require('unplugin-auto-import/webpack')({
        /* options */
      })
    ]
  }
}
