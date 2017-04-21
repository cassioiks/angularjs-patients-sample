var gulp            = require('gulp'),
    browserSync     = require('browser-sync');

// start webserver
gulp.task('server', function(done) {
  return browserSync({
    server: {
      baseDir: './app'
    }
  }, done);
});

gulp.task('default',['server']);