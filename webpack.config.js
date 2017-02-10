const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const APP_DIR = path.resolve(__dirname, 'src/js/');
const SASS_DIR = path.resolve(__dirname, 'src/scss/');
const BUILD_DIR = path.resolve(__dirname, 'dist/app/');


var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
        {
            test: /\.jsx?/,
            exclude: /node_modules/,
            include: APP_DIR,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        },
        {
            test: /\.scss?/,
            use: [
            {
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader",
                options: {
                    includePaths: [SASS_DIR]
                }
            }]
        }]
  }
};

module.exports = config;