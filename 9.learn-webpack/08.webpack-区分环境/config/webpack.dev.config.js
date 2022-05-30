const { merge } = require('webpack-merge');
const common  = require('./webpack.common.config')

module.exports = merge(common,  {
  mode: 'development',
  devtool: 'source-map', // 简历js映射文件
  devServer: {
    // 默认路径是public文件夹
    // contentBase: './public', // webpack5 被移除
    // static: false // 替代方式
    hot: true, // 热更新，代码修改时，浏览器会自动刷新
    port: 8000, // 本地服务器端口
    open: true, // 是否自动打浏览器
  },
})