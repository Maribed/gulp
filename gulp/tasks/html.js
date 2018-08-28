var gulp = require('gulp'),
    rigger = require('gulp-rigger'),
    path = require('../path');

gulp.task('html', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html));
});