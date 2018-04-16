const SriPlugin = require('webpack-subresource-integrity');

module.exports = {
  configureWebpack: {
    output: {
      crossOriginLoading: 'anonymous',
      publicPath: 'https://macoshita.github.io/webpack-subresource-integrity-crossorigin/'
    },
    plugins: [
      new SriPlugin({
        hashFuncNames: ['sha256', 'sha384'],
        enabled: true,
      })
    ]
  }
}
