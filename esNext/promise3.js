function gerarNumeroEntre(min, max) {
    if (min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        const aleatorio = parseInt(Math.random() * max)
        resolve(aleatorio)
    })
}

gerarNumeroEntre(10, 30)
    .then(numero => numero * 10)
    .then(numx10 => `O numero gerado foi ${numx10}`)
    .then(console.log)