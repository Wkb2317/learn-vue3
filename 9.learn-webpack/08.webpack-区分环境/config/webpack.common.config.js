const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index')

module.exports = {
  target: 'web',

  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'js/bundle.js',
  },

  resolve: {
    // 文件后缀名
    extensions: ['.js', '.json', '.wasm', '.vue', '.jsx', '.ts', 'tsx'],
    // 配置别名
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
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

    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: '黑喂狗',
    }),
    new DefinePlugin({
      BASE_URL: "'./'",
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),

    new VueLoaderPlugin(),
  ],
}
