var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    changed  = require('gulp-changed'),
    plumber = require("gulp-plumber"),
    path = require('../path');

gulp.task('images', function () {
    gulp.src(path.src.img)
        .pipe(plumber())
        .pipe(changed(path.build.img))
        .pipe(imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img));
});
