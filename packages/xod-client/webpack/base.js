const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
  ],
  output: {
    filename: 'bundle.js',
  },
  resolve: {
    root: path.join(__dirname, '../src'),
    modulesDirectories: ['node_modules', 'src', 'src/node_modules'],
    extensions: ['', '.js', '.jsx', '.scss'],
  },
  module: {
    loaders: [
      {
        test: /src\/.*\.jsx?$/,
        loaders: [
          'babel?presets[]=react,presets[]=es2015',
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css',
          'postcss',
          'sass?outputStyle=expanded',
        ],
      },
      {
        test: /assets\/.*\.(jpe?g|png|gif|svg|ttf|eot|svg|woff|woff2)?$/,
        loaders: [
          'file?name=[path][name].[ext]?[hash:6]&context=./src',
        ],
      },
      {
        test: /node_modules\/font-awesome\/.*\.(jpe?g|png|gif|svg|ttf|eot|svg|woff|woff2)(\?\S*)?$/,
        loaders: [
          'file?name=[path][name].[ext]?[hash:6]',
        ],
      },
      {
        test: /\.json5$/,
        loader: 'json5',
      },
    ],
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new CopyWebpackPlugin([
      { from: 'src/app-browser/index.html' },
    ]),
  ],
  postcss: function postCssPlugins() { return [autoprefixer]; },
};
