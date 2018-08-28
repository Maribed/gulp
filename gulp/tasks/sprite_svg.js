var gulp = require('gulp'),
    path = require('../path'),
    rename = require("gulp-rename"),
    svgstore = require('gulp-svgstore'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    replace = require('gulp-replace');

gulp.task('sprite-svg', function () {
    return gulp.src(path.src.sprites_svg)
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(cheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
                $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
            },
            parserOptions: { xmlMode: true }
        }))
        .pipe(rename({prefix: 'svg-'}))
        .pipe(svgstore())
        .pipe(rename({basename: 'sprite-svg'}))
        .pipe(gulp.dest(path.build.sprite_svg));
});
