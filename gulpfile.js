var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss');

    mix.scripts([
      'jquery-3.2.1.min.js',
      'bootstrap/bootstrap.bundle.js',
      'bootstrap/popper.js',
      'bootstrap/bootstrap.js',
      'banner.js',
    ],'public/js/app.js', './resources/assets/js/');
});
