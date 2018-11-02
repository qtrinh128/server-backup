const merge = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');

     module.exports = merge(common, {
       mode: 'development',
       devtool: 'inline-source-map',
       devServer: {
         contentBase: './dist'
       },
       plugins: [
            new Dotenv(),
            new HtmlWebpackPlugin({
               filename: 'index.html',
               template: 'src/index.html'
            })
       ],
});
