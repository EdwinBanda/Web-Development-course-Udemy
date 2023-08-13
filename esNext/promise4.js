function gerarNumerosEntre(min, max, tempo) {
    if (min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        setTimeout(() => {
            const aleatorio = parseInt(Math.random() * max)
            resolve(aleatorio)
        }, tempo);
    })
}

console.time('Promise')
function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 600),
        gerarNumerosEntre(1, 60, 2000),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 5000)
    ])
}

gerarVariosNumeros()
    .then(console.log)
    .then(() => console.timeEnd('Promise'))