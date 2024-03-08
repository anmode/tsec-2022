const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    overlay: false,
    contentBase: path.resolve(__dirname, 'public'),
    port: 3000,
    open: true,
  },
};
