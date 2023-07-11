function lista(objeto) {
    const objetoInvertido = {}
    Object.entries(objeto).forEach(parChaveValor => {
        const chave = 0,
            valor = 1
        objetoInvertido[parChaveValor[valor]] = parChaveValor[chave]
    })
    return objetoInvertido
}
console.log(lista({ a: 1, b: 2, c: 3 }))


// OU

function inverter(objecto) {
    const paresDeChaveValorInvertido = Object.entries(objecto)
        .map(parChaveValor => parChaveValor.reverse())
    return Object.entries(paresDeChaveValorInvertido)
}
console.log(lista({ a: 1, b: 2, c: 3 }))
