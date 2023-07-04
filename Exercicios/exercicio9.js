function classAluno(nota){
    let notaCorrigida =  arredondamento(nota)
    if (notaCorrigida >= 40){
        console.log(`Aprovado com ${notaCorrigida}`)
    }else{
        console.log(`Reprovado com ${nota}`)
    }
    
    
}

// Pra ver se chega no proximo multiplo de 5
function arredondamento(nota){
    if(nota % 5 > 2){
        return nota + (5 - (nota % 5))
    }else{
        return nota
    }
}

console.log(classAluno(38))