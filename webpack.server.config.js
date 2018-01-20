var path = require('path')
var webpack = require('webpack')
var VueSSRPlugin = require('vue-ssr-webpack-plugin')

module.exports = {
  target: 'node',
  entry: './src/main.server.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: 'dist/',
    filename: 'build.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg|mp4|woff|woff2|ttf|eot)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(mov|mp4)$/,
        loader: 'file-loader?limit=10000&mimetype=video/mp4',
        options: {
          name: '[name].[ext]'
        }  
      }
  ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  performance: {
    hints: false
  },
  externals: Object.keys(require('./package.json').dependencies),
  devtool: '#eval-source-map',
  plugins: [
    new VueSSRPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
}