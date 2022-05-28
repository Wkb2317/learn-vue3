const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index')

module.exports = {
  target: 'web',
  mode: 'development',
  entry: './src/main.js',
  devtool: 'source-map', // 简历js映射文件
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'js/bundle.js',
  },
  devServer: {
    // 默认路径是public文件夹
    // contentBase: './public', // webpack5 被移除
    // static: false // 替代方式
    hot: true, // 热更新，代码修改时，浏览器会自动刷新
    port: 8000, // 本地服务器端口
    open: true, // 是否自动打浏览器
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')],
              },
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg})$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         // outputPath: 'img',
      //         name: 'img/[name]_[hash:6].[ext]',
      //         limit: 1024 * 100, // 小于限制，转换成base64
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.(jpe?g|png|gif|svg})$/,
        type: 'asset',
        generator: {
          filename: 'img/[name]_[hash:6][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name]_[hash:6][ext]',
        },
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            // options: {
            //   // plugins: [
            //   //   '@babel/plugin-transform-arrow-functions',
            //   //   '@babel/plugin-transform-block-scoping',
            //   // ],
            //   presets: ['@babel/preset-env'],
            // },
          },
        ],
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: '黑喂狗',
    }),
    new DefinePlugin({
      BASE_URL: "'./'",
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: 'public',
    //       globOptions: {
    //         ignore: ['**/index.html'],
    //       },
    //     },
    //   ],
    // }),

    new VueLoaderPlugin(),
  ],
}
