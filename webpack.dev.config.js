const webpack = require('webpack')
const baseConfig = require('./webpack.base.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('lodash').mergeWith

require('dotenv').config()

module.exports = merge(baseConfig, {
  devtool: 'cheap-module-eval-source-map',
  output: {
    publicPath: '/static/',
    sourceMapFilename: '[name].js.map'
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true,
      'process.env': {
        'GRAPHQL_URL': JSON.stringify(process.env.GRAPHQL_URL)
      }
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('styles.css')
  ],
  devServer: {
    historyApiFallback: {
      index: '/'
    }
  }
})
