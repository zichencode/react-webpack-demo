/**
 * webpack 开发环境配置
 */
const path = require('path');
const webpackMerge = require('webpack-merge');
const webpack = require('webpack')

const baseWepack = require('./webpack.base.js')

const devConfig = {
  mode: 'development',
  devServer: {
    contentBase: '../dist',
    historyApiFallback: true // 使用html5 historyAPI时候必须设置的值
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'eval-source-map',
}

module.exports = webpackMerge(baseWepack, devConfig)