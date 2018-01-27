'use strict';

const pgk = require('./package');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: pgk.main,
  html: {
    title: pgk.name,
    template: 'src/app.ejs',
    minify: {
      removeAttributeQuotes: true,
      collapseWhitespace: true,
      removeComments: true,
      removeScriptTypeAttributes: true
    }
  },
  sourceMap: false,
  browsers: pgk.browserslist,
  presets: [
    require('poi-preset-offline')()
  ],
  webpack(config) {
    config.plugins.push(new Dotenv({
      systemvars: true
    }));

    return config;
  }
};
