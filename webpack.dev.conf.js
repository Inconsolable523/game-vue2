const { resolve, join } = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.base.conf');

module.exports = merge(common, {
  output: {
    path: resolve(__dirname, 'build')
  },
  devServer: {
    port: 8080, // 服务器端口
    inline: true,
    port: 8080

  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins:[
     new webpack.HotModuleReplacementPlugin()// 添加热替换插件
  //
  ]
})