function multiplicacaoSemOperador(num1, num2) {
    let res = 0
    for (let i = 0; i < num2; i++) {
        res += num1
    }
    return res
}
console.log(multiplicacaoSemOperador(5, 5))

// OU

function multiplicar(numA, numB) {
    if (numA === 0 || numB === 0) return 0

    const maiorNumero = Math.max(numA, numB)
    const menorNumero = Math.min(numA, numB)

    function multiplicarRecursivamente(numero, multiplicador) {
        return (
            multiplicador === 1 ?
                numero :
                numero + multiplicarRecursivamente(numero, multiplicador - 1) //O numero entre parenteses representa o acumulador que adiciona o multiplicador-1
        )
    }
    return multiplicarRecursivamente(maiorNumero, menorNumero)
}
console.log(multiplicar(5, 4))