'use strict';


var gulp       = require('gulp'),
    browserify = require('browserify'),
    babelify   = require('babelify'),
    // livereload = require('gulp-livereload'),
    rimraf     = require('rimraf'),
    source     = require('vinyl-source-stream');

gulp.task('transform', function() {
  browserify({
      entries: ['./project/static/scripts/jsx/main.js'],
      extensions: ['.coffee'], debug: true 
    })
    .transform(babelify)
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('main.js'))
    .pipe(gulp.dest('./project/static/scripts/js/'))
});


gulp.task('clean', function (cb) {
  rimraf('./project/static/scripts/js/*', cb);
});

gulp.task('default', ['clean'], function() {
  // livereload.listen();
  gulp.start('transform');
  gulp.watch('./project/static/scripts/jsx/*.js', ['transform']);
});

