var gulp = require('gulp'),
		concatCss = require('gulp-concat-css'),
		minifyCss = require('gulp-minify-css'),
		livereload = require('gulp-livereload'),
		connect = require('gulp-connect');

// server connect
gulp.task('connect', function () {
	connect.server({
		root: 'app',
		livereload: true
	});
});

// css
gulp.task('css', function () {
  return gulp.src('css/*.css')
    .pipe(concatCss('bundle.css'))
    .pipe(gulp.dest('app/css'))
    .pipe(minifyCss())
    .pipe(connect.reload());
});

// html
gulp.task('html', function() {
	gulp.src('app/index.html')
	.pipe(connect.reload());
});

// watch
gulp.task('watch', function () {
	gulp.watch('css/*.css', ['css'])
	gulp.watch('app/*.html', ['html'])
});


// default
gulp.task('default', ['connect', 'html', 'css', 'watch']);