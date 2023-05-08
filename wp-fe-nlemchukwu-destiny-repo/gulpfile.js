'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');

sass.compiler = require('node-sass');


gulp.task('sass', function(){
    return gulp.src('./sass/**/*.scss')

    .pipe(concat('main.scss'))
    .pipe(sass().on('error', sass.logError))

    .pipe(gulp.dest('./css/'))
})

gulp.task('sass:watch', function(){
    gulp.watch('./sass/**/*.scss', gulp.series(['sass']))
})













// const gulp = require('gulp');
// const htmltidy = require('gulp-htmltidy');
// // const autoprefixer = require('gulp-autoprefixer');
// const csslint = require('gulp-csslint');
// // const babel = require('gulp-babel');
// const jshint = require('gulp-jshint');
// const { series } = require('gulp');
// const sass = import('gulp-sass');
// const del = import('del');

// function html(cb) {
//   return gulp.src('src/index.html')
//         .pipe(htmltidy())
//         .pipe(gulp.dest('build'));
//     cb();
// }

// function css(cb) {
//     return gulp.src('src/style.css')
//         .pipe(csslint())
//         .pipe(csslint.formatter('compact'))
//         .pipe(autoprefixer({
//             cascade: false
//         }))
//         .pipe(gulp.dest('build'));
//     cb();
    
// }

// function js(cb) {
//     return gulp.src('src/main.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'))
//         .pipe(babel({
//             presets: ['@babel/env']
//         }))
//         .pipe(gulp.dest('build'));
//         cb();
// }

// const gulp = import('gulp');
// const sass = import('gulp-sass');
// const del = import('del');

// gulp.task('styles', () => {
//     return gulp.src('sass/**/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./css/'));
// });

// gulp.task('clean', () => {
//     return del([
//         'css/main.css',
//     ]);
// });

// gulp.task('default', gulp.series(['clean', 'styles']));

// exports.html = html;
// exports.css = css;
// exports.js = js;
// exports.default = series(html, css, js);




