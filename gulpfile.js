var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	eslint = require('gulp-eslint'),
	concat = require('gulp-concat'),
	ngAnnotate = require('gulp-ng-annotate'),
	wiredep = require('wiredep'),
	connect = require('gulp-connect');

gulp.task('build:css', function() {
	return gulp
		.src('app/assets/scss/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 3 versions'],
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('app/assets/css'))
		.pipe(connect.reload());
});

gulp.task('build:js', function() {
	return gulp
		.src([
			'app/assets/js/main.js',
			'app/assets/js/{config,constants,controllers,directives,filters,interceptors,services}/*.js'
		])
		.pipe(concat('app.js'))
		.pipe(ngAnnotate({
			single_quotes: true
		}))
		.pipe(gulp.dest('app/assets/js'))
		.pipe(connect.reload());
});

gulp.task('build', ['build:css', 'build:js']);

gulp.task('lint', function() {
	return gulp
		.src([
			'gulpfile.js',
			'app/assets/js/{,*/}*.js',
			'tests/{,e2e/,unit/}*.js',
		])
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failOnError());
});

gulp.task('serve', function() {
	connect.server({
		root: 'app',
		port: 9000,
		livereload: true,
		middleware: function() {
			var history = require('connect-history-api-fallback');
			return [history()];
		}
	});
});

gulp.task('reload', function() {
	connect.reload();
});

gulp.task('watch', function() {
	gulp.watch('app/assets/scss/{,*/}*.scss', ['sass']);
	gulp.watch('app/assets/js/{main,*/*}.js', ['lint', 'build:js']);
	gulp.watch('app/{views,assets/partials}/{,*/}*.html', ['reload']);
});

gulp.task('default', ['serve', 'watch']);
