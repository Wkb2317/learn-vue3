const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const {merge} = require('webpack-merge');
const common = require('./webpack.common.config')

module.exports = merge(common, {
  mode: 'production',
  plugins: [new CleanWebpackPlugin(),]
})