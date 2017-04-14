//For JIT.

'use strict';
let path = require('path');
let webpack = require('webpack');
var webpackMerge = require('webpack-merge');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
var DefinePlugin = require('webpack/lib/DefinePlugin');


module.exports = {
  entry: {
      "main": "./src/main.ts",
      "polyfill": "./src/polyfills.ts"
  },

  context: path.join(process.cwd(), ''),

  output: {
    path: path.join(process.cwd(), 'dist-jit'),
    filename: '[name].bundle.js',
    chunkFilename: 'dist/[id].chunk.js',
    publicPath: '/'
  },

  module: {
    rules: [
        {
        test: /\.ts$/,
        loaders: [
            { loader: 'awesome-typescript-loader', options: { configFileName: path.resolve(process.cwd(), 'src', 'tsconfig.json') }},
            'angular-router-loader',
            'angular2-template-loader']
        },
        {
        test: /\.html$/,
        use: 'raw-loader'
        },
        {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
        },
        {
        test: /\.css$/,
        loaders: 'style-loader!css-loader'
        }
    ]
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      path.join(process.cwd(), '')
    ),
    new CopyWebpackPlugin([
      { from: 'src/index.html' }
    ])
  ],

  resolve: {
    modules: [
        'node_modules',
        path.resolve(process.cwd(), 'src')
    ],
    extensions: ['.ts', '.js']
  },

  stats: 'errors-only',

  devtool: 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
};