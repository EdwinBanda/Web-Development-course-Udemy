function Array(arrayAntigo){
    let novoArray = []
    novoArray.push(arrayAntigo.shift(), arrayAntigo.pop())
    return novoArray
}
console.log(Array([1,2,3,4,"Edwin"]))

//Ou 

function ElementosArray([primeiroElemento, ...elementosRestantes]){
    const ultimoElemento = elementosRestantes.pop()
    return [primeiroElemento, ultimoElemento]
}
console.log(ElementosArray([2,4,8,'Banda']))