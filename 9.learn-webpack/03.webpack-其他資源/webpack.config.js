const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
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
            maxSize: 1000 * 1024,
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
    ],
  },
}
