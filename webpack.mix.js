const mix = require('laravel-mix');
const fs = require('fs');
const minify = require('html-minifier').minify;

function deleteFolderRecursive(path) {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach((file, index) => {
      let curPath = path + "/" + file;

      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });

    fs.rmdirSync(path);
  }
}

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

deleteFolderRecursive('dist');
fs.mkdirSync('dist');

mix.js('src/index.js', 'dist/js/app.js')
  .styles('src/index.css', 'dist/css/app.css')
  .copy('assets', 'dist');

let html = minify(fs.readFileSync('src/index.html').toString(), {
  removeAttributeQuotes: true,
  collapseWhitespace: true,
  removeComments: true
});

fs.writeFileSync('dist/index.html', html);
