const path = require('path');

module.exports = {
  entry: {
    raw: './src/js/raw.js',
    lit: './src/js/lit.js',
  },
  output: {
    path: path.join(__dirname,'dist'),
    filename: '[name].js'
  },
  devServer: {
    contentBase: path.join(__dirname,'dist')
  }
};
