const path = require('path');

module.exports = {
  entry: {
    bundle: './src/js/app.js'
  },
  output: {
    path: path.join(__dirname,'dist'),
    filename: '[name].js'
  },
  devServer: {
    contentBase: path.join(__dirname,'dist')
  }
};
