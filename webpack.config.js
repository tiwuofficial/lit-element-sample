const path = require('path');

module.exports = {
  entry: {
    raw: './src/js/raw.js',
    lit: './src/js/lit.js',
    ts: './src/js/ts.js'
  },
  output: {
    path: path.join(__dirname,'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions:['.ts', '.js']
  },
  devServer: {
    contentBase: path.join(__dirname,'dist')
  },
  module: {
    rules: [
      {
        test:/\.ts$/,
        loader:'ts-loader'
      }
    ]
  }
};
