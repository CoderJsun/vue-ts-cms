module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components',
        assets: '@/assets',
        pages: '@/pages',
        router: '@/router',
        services: '@/services',
        store: '@/store'
      }
    }
  }
}
