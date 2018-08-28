var gulp = require('gulp'),
    requireDir = require('require-dir');

requireDir('./gulp/tasks', { recurse: true });

gulp.task('build', [
    'sprite-svg',
    'js',
    'css',
    'html',
    'images'
]);

gulp.task('default', ['watch']);
