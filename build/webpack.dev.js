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
    contentBase: '../dist'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = webpackMerge(baseWepack, devConfig)