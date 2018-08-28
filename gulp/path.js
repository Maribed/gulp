"use strict";

var _src = './src/',
    _build = './';

module.exports = {

    src: {
        html: _src + 'html/*.html',
        js: _src + 'js/script.js',
        jshint: [_src + 'js/**/*.js', '!' + _src + 'js/vendors/**'],
        style: _src + 'scss/[^_]*.scss',
        img: _src + 'images/*.*',
        sprites: _src + 'images/sprites/*.*',
        sprites_style: _src + 'scss/',
        sprites_svg: _src + 'images/svg/*.svg'
    },
    build: {
        html: _build,
        js: _build + 'js/',
        style: _build + 'css/',
        img: _build + 'images/',
        sprite_svg: _build + 'images/',
        sprite_img: _src + 'images/',
        sprite_style: _src + 'scss/'
    },
    watch: {
        html: _src + '**/*.html',
        js: [_src + 'js/**/*.js'],
        style: _src + 'scss/**/*.scss',
        img: _src + 'images/*.*',
        sprites: _src + 'images/sprites/*.*',
        sprites_svg: _src + 'images/svg/*.svg'
    }
};