const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: ['./app/index.js','./app/stylesheets/style.scss'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader','sass-loader']
        })
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
    }),
  ],
};
