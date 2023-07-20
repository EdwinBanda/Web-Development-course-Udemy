function repetir(elemento,quantidade){
    result = []
    for(let i = 0; i<quantidade; i++){
        result.push(elemento)
    }
    return result
}
console.log(repetir('Edwin', 3))