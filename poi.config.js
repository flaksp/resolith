const pgk = require('./package');
const Dotenv = require('dotenv-webpack');
const poiPresetOffline = require('poi-preset-offline');

module.exports = {
  entry: pgk.main,
  html: {
    title: pgk.name,
    template: 'src/app.ejs',
    minify: {
      removeAttributeQuotes: true,
      collapseWhitespace: true,
      removeComments: true,
      removeScriptTypeAttributes: true,
    },
  },
  filename: {
    js: '[name]-[hash:8].js',
    css: '[name]-[hash:8].css',
  },
  sourceMap: false,
  browsers: pgk.browserslist,
  presets: [
    poiPresetOffline(),
  ],
  webpack(config) {
    config.plugins.push(new Dotenv({
      systemvars: true,
    }));

    return config;
  },
};
