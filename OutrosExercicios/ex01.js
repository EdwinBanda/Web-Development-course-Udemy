function quantidadeChar(string, char){
    const resultado = string.toLowerCase().split('')
    const tamanho = []
    for(v of resultado){
       if(v == char) {
        tamanho.push(v)
       }
       
    }
    return tamanho.length
}
console.log(quantidadeChar('Edwinne', 'e'))