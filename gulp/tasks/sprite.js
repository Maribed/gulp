var gulp = require('gulp'),
    spritesmith = require('gulp.spritesmith'),
    plumber = require("gulp-plumber"),
    path = require('../path');

gulp.task('sprite', function () {
    var spriteData = gulp.src(path.src.sprites)
        .pipe(plumber())
        .pipe(spritesmith({
            imgName: path.build.sprite_img + 'sprites.png',
            cssName: path.build.sprite_style + '_sprites.scss',
            cssVarMap: function(sprite) {
                sprite.name = 's-' + sprite.name
            }
        }));
    return spriteData.pipe(gulp.dest('./'));
});
