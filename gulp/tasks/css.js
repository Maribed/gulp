var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer'),
    postcss = require('gulp-postcss'),
    csso = require('gulp-csso'), // Минификация CSS
    rename = require("gulp-rename"),
    plumber = require("gulp-plumber"),
    notify = require("gulp-notify"),
    neat = require('node-neat').includePaths,
    path = require('../path');

gulp.task('css', function () {
    return gulp.src(path.src.style)
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(sourcemaps.init())
        .pipe(sass({includePaths: ['styles'].concat(neat)}))
        .pipe(csso()) // минимизируем css
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.style));
});
