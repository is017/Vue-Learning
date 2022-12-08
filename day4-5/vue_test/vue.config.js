const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 代理1
  /* devServer: {
    proxy: 'http://localhost:8000'
  } */

  // 代理2
  devServer: {
    proxy: {
      '/jxc': {
        target: 'http://localhost:8000',
        pathRewrite: { '^/jxc': '' },
        // ws: true,
        // changeOrigin: true
      }
    }
  }
})
