function gerarNumeroEntre(min, max, numeroDublicado) {
    if (min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const aleatorio = parseInt(Math.random() * max)
        if (numeroDublicado.includes(aleatorio)) {
            reject('Numero repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdNumeros, tentativas = 1) {
    try {
        const numeros = []
        for (let _ of Array(qtdNumeros).fill()) {
            numeros.push(await gerarNumeroEntre(1, 60, numeros))
        }
        return numeros
    } catch (e) {
        if (tentativas > 10) {
            throw 'Nao deu certo'
        } else {
            return gerarMegaSena(qtdNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(10)
    .then(console.log)
    .catch(console.log)