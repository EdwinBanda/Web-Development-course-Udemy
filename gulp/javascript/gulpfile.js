const {series} = require('gulp');
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');


function transformacaoJS(callBack){
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: "env"
        }))
        .pipe(uglify())
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build/js'))


    return callBack()
}

function fim(callBack){
    console.log('Fim!!!')
    return callBack()
}

exports.default = series(transformacaoJS, fim)