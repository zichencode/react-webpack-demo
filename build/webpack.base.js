/**
 * webpack基础配置
 */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const fs = require('fs');

const NODE_ENV = process.env.NODE_ENV === 'production' ? true : false;

module.exports = {
  entry: path.join(__dirname, '../src/app.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
    chunkFilename: 'chunk/[name].bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      // less文件
      {
        test: /\.less$/,
        use: [NODE_ENV ? MiniCssExtractPlugin.loader : 'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: "[name]__[local]--[hash:base64:3]",
            },
            // localIdentName: '[name]_[local]_[hash:base64:5]'
          }
        },
          'postcss-loader', 'less-loader'],
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
        include: path.resolve(__dirname, '../src'), // 匹配特定条件
      },
      // 转换js
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader', // 转译ES6+语法
            options: {
              cacheDirectory: true
            }
          },
          // 'eslint-loader' // 注视eslint
        ],
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../src'), // 匹配特定条件
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:5].css',
      chunkFilename: 'chunk/[id].[contenthash:5].css',
      linkType: 'text/css'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.join(__dirname, '../src'),
    },
  }
}