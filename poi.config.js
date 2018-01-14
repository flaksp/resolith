const pgk = require('./package')

module.exports = {
  entry: pgk.main,
  html: {
    title: pgk.name,
  },
  sourceMap: false,
  browsers: pgk.browserslist
}