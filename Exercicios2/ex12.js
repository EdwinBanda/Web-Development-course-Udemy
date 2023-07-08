function removerPropriedade(objeto, propriedade) {
    const copia = Object.assign({}, objeto)
    delete copia[propriedade]

    return copia
}

console.log(removerPropriedade({nome: 'Edwin', idade: 19, peso: 65}, "idade"))