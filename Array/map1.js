const nums = [1, 2, 3, 4, 5]

// O map retorna um novo array a partir de um array original, e executa uma callBack
// No map, o array retornado retorna o mesmo numero de indices que o array original, simplesmente mudam os valores dependendo da callBack
let resultado = nums.map(function (e) { // Neste caso o map retorna um outro array com o dobro dos valores do array original
    return e * 2
})
console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

let res = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(res)