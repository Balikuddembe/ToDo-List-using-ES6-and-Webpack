const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {

    index: './src/index.js',
  },
  devServer: {

    static: './dist',

  },
  output: {
    // filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
    filename: 'my-first-webpack.bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [

    new HtmlWebpackPlugin({

      template: './src/index.html',
      filename: 'index.html',

    }),

  ],
};