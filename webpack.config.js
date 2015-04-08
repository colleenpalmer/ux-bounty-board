var autoprefixer = require('autoprefixer-core');
var webpack = require("webpack");

module.exports = {
  entry: {
    Home: './index.jsx'
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
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/, 
        loader: "file" 
      },
      {   
        test: /\.scss$/,
          loader: "style!css!sass"
          
      },      
      {
        test: /\.styl$/,
        loader: 'style!css!stylus'
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      }
    ]
  },
  postcss: [ 
    autoprefixer({ browsers: ['last 2 version'] }) 
  ],
  externals: {
    //don't bundle the 'react' npm package with our bundle.js
    //but get it from a global 'React' variable
    'react': 'React'
  },  
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}