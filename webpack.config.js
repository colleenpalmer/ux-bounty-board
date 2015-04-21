var autoprefixer = require('autoprefixer-core');
var webpack = require("webpack");

module.exports = {
  entry: {
    Home: './index.jsx'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
      filename: 'bundle.js', //this is the default name, so you can skip it
      //at this directory our bundle file will be available
      //make sure port 8090 is used when launching webpack-dev-server
      publicPath: 'http://localhost:8090/assets'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'jsx-loader?insertPragma=React.DOM&harmony'
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.woff2$|\.eot$/,
        loader: "file"
      },      
      {
        test: /\.less$/,
        loader: 'style!css!postcss!less'
      },
      {
        test: /\.styl$/,
        loader: 'style!css!postcss!stylus'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!postcss!sass'
      }
    ]    
  },
  postcss: [ autoprefixer({ browsers: ['last 2 version'] }) ]
}
