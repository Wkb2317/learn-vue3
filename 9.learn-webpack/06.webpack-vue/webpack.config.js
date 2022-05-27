const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  // mode: 'development',
  devtool: 'source-map', // 简历js映射文件
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'js/bundle.js',
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
          publicPath: '../build/',
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
          publicPath: '../build/',
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
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          // to: 'build',
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
  ],
}
