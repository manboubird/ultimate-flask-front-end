'use strict';

var gulp        = require('gulp'),
    browserify  = require('browserify'),
    babelify    = require('babelify'),
    rimraf      = require('rimraf'),
    source      = require('vinyl-source-stream'),
    browserSync = require('browser-sync');
var reload      = browserSync.reload;
var exec        = require('child_process').exec;

gulp.task('transform', function() {
  browserify({
      entries: ['./project/static/scripts/jsx/main.js'],
      extensions: ['.jsx','js'], debug: true 
    })
    .transform(babelify)
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('main.js'))
    .pipe(gulp.dest('./project/static/scripts/js/'))
    .pipe(browserSync.stream());
});


gulp.task('clean', function (cb) {
  rimraf('./project/static/scripts/js/*', cb);
});

// gulp.task('default', ['clean'], function() {
//   // livereload.listen();
//   gulp.start('transform');
//   gulp.watch('./project/static/scripts/jsx#<{(|*', ['transform']);
// });

gulp.task('webserver', function() {
  var proc = exec('python project/app.py');
});

gulp.task('default', ['clean', 'webserver'], function () {
  browserSync({
    notify: false,
    proxy: '127.0.0.1:5000' // the url of webserver task's
  });

  gulp.start('transform');
  gulp.watch('./project/static/scripts/jsx/*', ['transform']);
  gulp.watch(['./project/static/css/*.css'], reload);

});
