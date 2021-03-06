module.exports = {
  entry: './src/entry.js',
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
