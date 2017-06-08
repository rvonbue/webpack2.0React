const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          query: { presets: ['env',"es2015", "react"] }
        }
      },
      // {
      //     test: require.resolve('jquery'),
      //     use: [{
      //         loader: 'expose-loader',
      //         options: 'jQuery'
      //     },{
      //         loader: 'expose-loader',
      //         options: '$'
      //     }]
      // },
      {test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: ["css-loader", "less-loader"],
          fallback: "style-loader",
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("allStyles.css"),
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin(),
  //   new webpack.optimize.UglifyJsPlugin({
  //     beautify: false,
  //     mangle: {
  //       screw_ie8: true,
  //       keep_fnames: true
  //     },
  //     compress: {
  //       screw_ie8: true
  //     },
  //     comments: false
  //   })
  ]
};
