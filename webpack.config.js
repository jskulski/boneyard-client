module.exports = {
  entry: './src/App.js',
  content_base: 'build',
  output: {
    filename: './build/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader?harmony' }
    ]
  }
};
