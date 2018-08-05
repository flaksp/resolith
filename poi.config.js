const poiPresetOffline = require('poi-preset-offline');
const Dotenv = require('dotenv-webpack');
const pgk = require('./package');

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
    variables: {
      slides: [{
        id: 'aspect-ratio',
        textBeforeValue: 'Aspect ratio is',
        textAfterValue: '&nbsp;',
      }, {
        id: 'viewport',
        textBeforeValue: 'Viewport is',
        textAfterValue: 'pixels',
      }, {
        id: 'scrollbar-width',
        textBeforeValue: 'Browser\'s scrollbar margin is',
        textAfterValue: 'pixels',
      }, {
        id: 'resolution',
        textBeforeValue: 'Screen resolution is',
        textAfterValue: 'pixels',
      }],
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
