let lista = [12, 17, 10]

let soma = 0;
lista.forEach(el => {
    soma += el
})

let media = soma / lista.length
console.log(media.toFixed(1))