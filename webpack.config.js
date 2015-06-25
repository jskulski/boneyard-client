module.exports = {
  entry: './src/App.js',
  output: {
    filename: './dist/scripts/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader?harmony' }
    ]
  }
};
