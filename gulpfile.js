'use strict';

// requirements

var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    size = require('gulp-size'),
    livereload = require('gulp-livereload'),
    clean = require('gulp-clean'); // migrate to del plugin 


// tasks

gulp.task('transform', function () {
   return gulp.src('./project/static/scripts/jsx/main.js')
   .pipe(browserify({transform: ['reactify']}))
   .pipe(gulp.dest('./project/static/scripts/js'))
   .pipe(livereload())
   .pipe(size()); 
});

gulp.task('clean', function () {
  return gulp.src(['./project/static/scripts/js'], {read: false})
    .pipe(clean());
});

gulp.task('default', ['clean'], function() {
  livereload.listen();
  gulp.start('transform');
  gulp.watch('./project/static/scripts/jsx/main.js', ['transform']);
});
