var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  title: "Resistance",
  filename: "index.html",
  template: path.join(__dirname, 'src', 'index.html'),
  inject: 'body'
});

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        loader: "babel"
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        loaders: [
          "style",
          "css",
          "sass"
        ]
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig
  ]
};