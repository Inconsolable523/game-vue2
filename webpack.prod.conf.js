// 前端开发环境通常分为两种，开发环境和生成环境，
// 在开发环境中，可能我们需要日志输出，sourcemap ，错误报告等功能，
// 在生成环境中，需要做代码压缩，hash 值生成
var path = require('path');
var webpack=require('webpack');

// Todo:浏览器自动刷新，压缩，热加载
module.exports = {
  entry:{
    app:path.resolve(__dirname, 'src/main.js'),
    vendors:['vue']
  },
  output: {
    path: path.resolve(__dirname + 'dist'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{
          loader: 'babel-loader',
          options: {
            plugins: ['transform-runtime'],
            presets: ['es2015']
          }
        }],
        exclude: /node_modules/

      },
      {
        test: /\.vue$/,
        use: [{
          loader: 'vue-loader',
          options: {
            loaders: {
              js: 'babel-loader',
              css: 'vue-style-loader!css-loader'
            }
          }
        }],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']

      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      // 自动把这些图片转成BASE64字符串然后内联到CSS里来降低必要的请求数,
      // 图片如果不大于 25KB 的话要自动在它从属的 css 文件中转成 BASE64 字符串。
      {
        test: /\.(png|jpg)$/,
        use: [{
          loader: 'url-loader',
          limit: 25000
        }]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          limit: 10000
        }]
      },

    ]
  },
  plugins:[
    // 分离依赖
    new webpack.optimize.CommonsChunkPlugin('vendors','vendors.js')
  ]

}
