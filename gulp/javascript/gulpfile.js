const {parallel} = require('gulp');
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

function transformJS(callback){
    gulp.src('/src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify())
        .on('error', err=> err)  // Caso aconteca um erro... faca...
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))

    return callback()
}

function fim(callback){
    console.log("Fim!")
    return callback()
}

module.exports.default = parallel(
    transformJS,
    fim
)