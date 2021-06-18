const mix = require('laravel-mix');

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

mix.js('resources/js/app.js', 'public/js')
    .react()
    .js('resources/js/portfolio/index.js', 'public/js/portfolio').react()
    .js('resources/js/filr/src/index.js', 'public/js/filr').react()
    .sass('resources/sass/app.scss', 'public/css');
mix.disableNotifications();
