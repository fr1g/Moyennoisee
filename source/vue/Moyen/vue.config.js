module.exports = {
    devServer: {
        port: 8022,
        proxy: {
          '/dev-api': {
            target: 'http://localhost:8081',
            changeOrigin: true,
            pathRewrite: { '^/dev-api': '' }
          }
        }
    }
}
