var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    uglify = require('gulp-uglify'),
    jshint = require("gulp-jshint"),
    rename = require("gulp-rename"),
    plumber = require("gulp-plumber"),
    notify = require("gulp-notify"),
    path = require('../path');

// проверка js на ошибки и вывод их в консоль
gulp.task('jshint', function() {
    return gulp.src(path.src.jshint) //выберем файлы по нужному пути
        .pipe(jshint()) //прогоним через jshint
        .pipe(jshint.reporter('jshint-stylish')); //стилизуем вывод ошибок в консоль
});

gulp.task('js', ['jshint'], function () {
    gulp.src(path.src.js) //Найдем наш main файл
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>. Line: <%= error.lineNumber %>")}))
        .pipe(rigger()) //Прогоним через rigger
        .pipe(sourcemaps.init()) //Инициализируем sourcemap
        // .pipe(uglify()) //Сожмем наш js
        .pipe(sourcemaps.write()) //Пропишем карты
        .pipe(rename({suffix: '.min'})) //добавим суффикс .min к выходному файлу
        .pipe(gulp.dest(path.build.js)); //Выплюнем готовый файл в build
});
