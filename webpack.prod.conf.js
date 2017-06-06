// 前端开发环境通常分为两种，开发环境和生成环境，
// 在开发环境中，可能我们需要日志输出，sourcemap ，错误报告等功能，
// 在生成环境中，需要做代码压缩，hash 值生成
const { resolve } = require('path');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const common = require('./webpack.base.conf');


module.exports = merge(common, {
  entry: {
    vendor: ['vue'],
    main: resolve(__dirname, 'src/main.js'),
  },
  output: {
    path: resolve(__dirname, 'dist')
  },
  plugins: [
    new UglifyJsPlugin({
      beautify: false,
      mangle: { screw_ie8: true },
      compress: { screw_ie8: true, warnings: false },
      comments: false
    }),
    new CommonsChunkPlugin({
      name: "vendor",
      filename: "vendor.bundle.js"
    })
  ]

});