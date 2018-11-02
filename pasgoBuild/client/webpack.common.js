 const path = require('path');
 const CleanWebpackPlugin = require('clean-webpack-plugin');

 module.exports = {
   entry: {
     index: './src/index.js',
   },
     module: {
       rules: [
           {
               test: /\.css$/,
               exclude: /node_modules/,
               use: [
                   'style-loader',
                   'css-loader',
               ],
           },
       ]
     },
   plugins: [
     new CleanWebpackPlugin(['dist'])
   ],
   output: {
       filename: 'pasgoNotify.js',
       path: path.resolve(__dirname, 'dist')
   }
 };
