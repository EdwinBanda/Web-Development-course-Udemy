module.exports = (...lista) => {
    return Object.values(lista.map(nome => `Saudacoes ${nome}`))
}