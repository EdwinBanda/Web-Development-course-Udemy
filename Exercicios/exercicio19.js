function cardapio(codigo, qtd) {
    let nome = ""
    let precoTotal = 0
    let precoUnit = 0
    switch (codigo) {
        case "100":
            nome = "Cachorro quente"
            precoUnit = 3
            precoTotal = qtd * precoUnit;
            return `Aqui tem ${qtd} ${nome} ao preco de ${precoTotal}`

        case "200":
            nome = "Hamburguer simples"
            precoUnit = 4
            precoTotal = qtd * precoUnit;
            return `Aqui tem ${qtd} ${nome} ao preco de ${precoTotal}`

        case "300":
            nome = "Cheeseburguer"
            precoUnit = 5.5
            precoTotal = qtd * precoUnit;
            return `Aqui tem ${qtd} ${nome} ao preco de ${precoTotal}`

        case "400":
            nome = "Bauru"
            precoUnit = 7.5
            precoTotal = qtd * precoUnit;
            return `Aqui tem ${qtd} ${nome} ao preco de ${precoTotal}`

        case "500":
            nome = "Refrigerante"
            precoUnit = 3.5
            precoTotal = qtd * precoUnit;
            return `Aqui tem ${qtd} ${nome} ao preco de ${precoTotal}`

        case "600":
            nome = "Suco"
            precoUnit = 2.8
            precoTotal = qtd * precoUnit;
            return `Aqui tem ${qtd} ${nome} ao preco de ${precoTotal.toFixed(2)}`

        default:
            console.log("Infelizmente, nao temos!")
    }
}

console.log(cardapio("600", 3))