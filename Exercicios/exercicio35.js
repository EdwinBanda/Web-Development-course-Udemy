let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

function adicionar(vetorInicial, vetorAdicionar) {
    for (let i = 0; i < vetorAdicionar.length; i++) {
        vetorInicial.push(vetorAdicionar[i])
    }
    console.log(`vector adicionado: ${vetorAdicionar}`)
    console.log(`vector resultado: ${vetorInicial}`)
}
adicionar(vetorPilha, vetorAdiciona)
// adicionar()