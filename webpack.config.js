const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js')
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname, 'public/js')
      ],
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },{
      test: /\.vue$/,
      loader: 'vue-loader'
    },{
      test: /\.css$/,
      loader: ['style-loader', 'css-loader', 'stylus-loader']
    },{ 
      test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
      loader: 'url-loader?limit=100000' 
    }]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ],
  devtool: 'source-map',
  mode: 'development'
};