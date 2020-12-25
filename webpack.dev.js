const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: './public',
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "" } // 如果你不想始终传递 /api ，则需要重写路径：
      }
    }
  },
  devtool: 'source-map'
})
