var webpack = require('webpack');
var path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'extension'),
    libraryTarget: 'window',
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
  stats: {
    colors: true,
  },
  target: 'web',
  externals: /^(https?\:\/\/)(\/.*)?/
};
