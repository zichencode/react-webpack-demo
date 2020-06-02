/**
 * webpack 生产环境配置
 */
const path = require('path');
const webpackMerge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const baseWepack = require('./webpack.base.js')

const devConfig = {
  mode: 'production',

  plugins: [
    new CleanWebpackPlugin()
  ]
}

module.exports = webpackMerge(baseWepack, devConfig)