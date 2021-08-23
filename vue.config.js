module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:4000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components',
        assets: '@/assets',
        pages: '@/pages',
        router: '@/router',
        service: '@/service',
        store: '@/store'
      }
    }
  }
}
