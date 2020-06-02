/**
 * webpack基础配置
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      // less文件
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
        exclude: /node_modules/
      },
      // 图片
      {
        test: /\.(png|jpe?g|svg|gif|bmp)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096, // 字节为单位 ，即小于4kb 的转换为base64
              outputPath: 'images/', // 打包到指定目录下
              name: 'img_[hash:5].[ext]', // 生成指定的名称
            }
          }
        ],
        exclude: /node_modules/, // 排除选项
        include: path.resolve(__dirname, 'src'), // 匹配特定条件
      },
      // 转换js
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader' // 转译ES6+语法
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}