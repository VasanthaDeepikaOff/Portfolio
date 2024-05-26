
// const gulp = require('gulp');
// const sass = require('gulp-sass')(require('sass'));
// const autoprefixer = require('autoprefixer'); // Import autoprefixer directly
// const postcss = require('gulp-postcss');
// const cleanCSS = require('gulp-clean-css');
// const rename = require('gulp-rename');

// function compileSass() {
//     return gulp.src('src/scss/styles.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(postcss([autoprefixer()])) // Use autoprefixer directly with postcss
//         .pipe(gulp.dest('dist/css'))
//         .pipe(cleanCSS())
//         .pipe(rename({ suffix: '.min' }))
//         .pipe(gulp.dest('dist/css'));
// }

// function watchFiles() {
//     gulp.watch('src/scss/**/*.scss', compileSass);
// }

// exports.build = gulp.series(compileSass);
// exports.watch = watchFiles;
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer'); 
const postcss = require('gulp-postcss'); 
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const babel = require('gulp-babel'); // Import gulp-babel for JavaScript transpilation
const uglify = require('gulp-uglify'); // Import gulp-uglify for JavaScript minification

function compileSass() {
    return gulp.src('src/scss/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer()])) 
        .pipe(gulp.dest('dist/css'))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css'));
}

function compileJS() {
    return gulp.src('src/js/**/*.js')
        .pipe(babel({ presets: ['@babel/preset-env'] })) // Transpile JavaScript using Babel
        .pipe(uglify()) // Minify JavaScript
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/js'));
}

function watchFiles() {
    gulp.watch('src/scss/**/*.scss', compileSass);
    gulp.watch('src/js/**/*.js', compileJS);
}

exports.build = gulp.parallel(compileSass, compileJS);
exports.watch = watchFiles;
