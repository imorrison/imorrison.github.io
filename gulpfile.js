'use strict';

var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
  gulp.src('./src/**/*')
    .pipe(ghPages({ branch: 'master' }));
});

