'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	notify = require("gulp-notify"),
	autoprefixer = require('gulp-autoprefixer'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect');

// server
gulp.task('connect', function() {
	connect.server({
		root: '',
		livereload: true
	});
});

// css
gulp.task('css', function() {
	gulp.src('sass/*.scss')
		.pipe(sass())
		.pipe(autoprefixer('last 20 versions'))
		.pipe(connect.reload())
		.pipe(gulp.dest('css'));
});

// html
gulp.task('html', function() {
	gulp.src('*.html')
	.pipe(connect.reload());
});

// watch
gulp.task('watch', function() {
	gulp.watch('sass/includes/*.sass', ['css'])
	gulp.watch('*.html', ['html'])
});

// default
gulp.task('default', ['connect', 'html', 'css', 'watch']);