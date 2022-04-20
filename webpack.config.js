const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
  entry: {
    main: './src/js/index.js',
    jquery: './src/js/jquery.js',
    htmlFive: './src/js/htmlFive.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    headers:{
      'X-Custom-Header': 'Custom',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Request-Headers': '*',
      'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
    },
    https: false,
    open: true
  },
  watchOptions: {
    poll: 10000 // Check for changes every 10 seconds, this is needed for WSL2
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['main'],
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['jquery'],
      filename: 'jquery.html',
      template: 'src/jquery.html'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['htmlFive'],
      filename: 'htmlFive.html',
      template: 'src/htmlFive.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            "plugins": [ "@babel/transform-runtime" ]
          },
        },
      },
      {
        test: /\.html$/,
        use: [
            {
                loader: "html-loader",
                options: { minimize: true }
            }
        ]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader',
        }, 
        {
          loader: 'css-loader',
        }, 
        {
          loader: 'sass-loader',
        }],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'images/',
            name: '[name].[ext]'
          }
        }
        ]
      }
    ],
  },
};