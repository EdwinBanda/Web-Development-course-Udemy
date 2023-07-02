// Utilizei o operador spread ... para desestruturar o array
let lista = [2, -1, 4, 7, -3, 5, -12, 11, 40, -0.5, 8]
const maior = Math.max(...lista) // spread ...
const menor = Math.min(...lista) // spread ...
console.log(maior)
console.log(menor)
console.log(...lista) // Array desestruturado