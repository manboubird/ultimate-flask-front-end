'use strict';

var gulp        = require('gulp'),
    browserify  = require('browserify'),
    babelify    = require('babelify'),
    rimraf      = require('rimraf'),
    source      = require('vinyl-source-stream'),
    gutil       = require('gulp-util'),
    eslint      = require('gulp-eslint'),
    mocha       = require('gulp-mocha'),
    browserSync = require('browser-sync');
var reload      = browserSync.reload;
var spawn       = require('child_process').spawn;


gulp.task('transform', ['lint'], function() {
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

gulp.task('lint', function () {
  return gulp.src(['./project/static/scripts/jsx/**','!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('mocha', function() {
  return gulp.src(['./test/jsx/**/*.js'], { read: false })
    .pipe(mocha({ reporter: 'list'}))
    .on('error', gutil.log);
});

gulp.task('watch-mocha', function () {
  gulp.watch(
    ['./project/static/scripts/jsx/**', './test/jsx/**/*.js'],
    ['mocha']
  );
});

gulp.task('clean', function (cb) {
  rimraf('./project/static/scripts/js/*', cb);
});

gulp.task('webserver', function(cb) {
  var logPrefix = 'WS: '
  var server = spawn('python', ['project/app.py']);
  server.stdout.on('data', function (data) {
    gutil.log(logPrefix + data);
  });
  server.stderr.on('data', function (data) {
    gutil.log(logPrefix + data.toString('binary').replace(/\n$/, ''));
  });
  server.on('exit', function (data) {
    gutil.log(logPrefix +' webserver is shutdowned. data = ' + data);
  });
});

gulp.task('default', ['clean'], function () {
  gulp.start('transform', 'webserver');
  browserSync({
    proxy: '127.0.0.1:5000', // the url of webserver task's
    open: false,
    notify: true
  });
  gulp.watch('./project/static/scripts/jsx/**', ['transform']);
  gulp.watch(['./project/static/css/*.css', './project/templates/*.html'], reload);
});
