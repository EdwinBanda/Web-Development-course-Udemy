const gulp = require('gulp');
const { series } = require('gulp'); //Pegando a funcao series do gulp (Destruturing)
const { parallel } = require('gulp');


const antes1 = callBack =>{
    console.log('Tarefa antes 1!')
    
    return callBack()
}

const antes2 = callBack =>{
    console.log('Tarefa antes 2!')
    return callBack()
}

function copiar(callBack){
    //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    gulp.src('pastaA/**/*.txt')
        .pipe(gulp.dest('pastaB'))
    return callBack()
}

const fim = callback =>{
    console.log('Tarefa fim!')
    return callback()
}


module.exports.default = series(
    parallel(antes1,antes2),
    copiar,
    fim
)