const {series , parallel} = require('gulp')
const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json')
const babel = require('gulp-babel');

function transformTS(callback){
    tsProject.src('src/**/*.ts')
    .pipe(tsProject())
    .pipe(gulp.dest('build/ts'))

    return callback()
}

exports.default = series(transformTS)