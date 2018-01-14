const pgk = require('./package')

module.exports = {
  entry: pgk.main,
  html: {
    title: pgk.name,
    minify: {
      removeAttributeQuotes: true,
      collapseWhitespace: true,
      removeComments: true,
      removeScriptTypeAttributes: true
    }
  },
  sourceMap: false,
  browsers: pgk.browserslist
}