var elixir = require('laravel-elixir');
var theme = 'flint';

elixir.config.assetsPath = './';
elixir.config.publicPath = './';

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Statamic theme. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass(theme + '.scss', 'css/' + theme + '.css');
    mix.scripts('src/*.js', 'js/' + theme + '.js');
    // mix.version('css/' + theme + '.css');
});
