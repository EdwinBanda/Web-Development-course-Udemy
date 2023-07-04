function jurosSimples(capInicial, taxaJuros, tempo ){
    return capInicial +(capInicial * taxaJuros * tempo)
}

function jurosCompostos(capInicial,taxaJuros,tempo){
    return capInicial * (1 + taxaJuros) ** tempo
}

console.log(jurosSimples(100, 0.1, 2))
console.log(jurosCompostos(100,0.1,2))