const gulp = require('gulp');
const webserver = require('gulp-webserver');
const watch = require('gulp-watch');

function server(){
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true
        }))
}

function monitorarArquivos(callback){
    watch('src/**/*.html', ()=> gulp.series('appHTML')())
    watch('src/assets/sass/**/*.scss', ()=> gulp.series('appCSS')())
    watch('src/assets/js/**/*.js', ()=> gulp.series('appJS')())
    watch('src/assets/imgs/**/*.*', ()=> gulp.series('appIMG')())

    return callback()
}


module.exports = {
    monitorarArquivos,
    server
}