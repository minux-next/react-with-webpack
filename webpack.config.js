const path = require('path');

module.exports = {
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.bundle.js',
  },
  devServer: {
    port: 8888,
    liveReload: true
  },
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.scss$/,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader',
            ]
        }
    ]
  }
}