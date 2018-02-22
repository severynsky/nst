const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
   loaders: [
     {
       test: /\.js$/,
       loader: 'babel-loader',
       query: {
         presets: ['es2015']
       }
     },
   ],
   rules: [
    {
       test: /\.svg/,
       use: {loader: 'svg-url-loader', options: {}}
     },
     {
       test: /\.sass$/,
       use: [
         {
           loader: "style-loader" // creates style nodes from JS strings
         }, {
           loader: "css-loader", // translates CSS into CommonJS
           options: {
                   sourceMap: true
               }
         }, {
           loader: "sass-loader", // compiles Sass to CSS
           options: {
                   sourceMap: true
               }
         },
       ],
     }
   ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
 stats: { colors: true },
 devtool: 'source-map'
};
