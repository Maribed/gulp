var gulp = require('gulp'),
    chokidar = require('chokidar'),
    path = require('../path');

gulp.task('watch', function(){
    chokidar.watch(path.watch.html, {usePolling: true})
        .on('all', function(){
            gulp.run('html');
        });

    chokidar.watch(path.watch.style, {usePolling: true})
        .on('all', function(){
            gulp.run('css');
        });

    chokidar.watch(path.watch.js, {usePolling: true})
        .on('all', function(){
            gulp.run('js');
        });

    chokidar.watch([path.watch.img], {usePolling: true})
        .on('all', function(){
            gulp.run('images');
        });

    chokidar.watch(path.watch.sprites, {usePolling: true})
        .on('all', function(){
            gulp.run('sprite');
        });

    chokidar.watch(path.watch.sprites_svg, {usePolling: true})
        .on('all', function(){
            gulp.run('sprite-svg');
        });
});
