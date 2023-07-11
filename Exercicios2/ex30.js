const soma = array => array.reduce((acumulador, atual) => {
    return acumulador + atual
})
const media = array => (soma(array) / array.length).toFixed(2)

function melhorAluno(estudante) {
    const res = Object.entries(estudante).map(estudante => {
        const chave = 0,
            valor = 1
        return { nome: estudante[chave], media: media(estudante[valor]) }
    })
    const estudantesOrdenados = res.sort((estudanteA, estudanteB) => estudanteB.media - estudanteA.media)
    const melhorEstudante = estudantesOrdenados[0]
    return melhorEstudante
}
console.log(melhorAluno({
    Edwin: [18, 13, 16],
    Pedro: [11, 20, 14],
    Maria: [17, 10, 13],
}))
