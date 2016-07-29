var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var elixir = require('laravel-elixir');

require('laravel-elixir-livereload');

//elixir.config.sourcemaps = false;

elixir(function(mix) {
	mix.sass('app.scss')
		.browserify('app.js')
		.livereload();
});


gulp.task('fonts', function() {
  return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('public/fonts'))
})