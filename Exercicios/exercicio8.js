let string = "5, 3, 7, 12, 17"
function records(string) {
    let pontuacoes = string.split(",")
    // let primeiroJogo = pontuacoes[0]
    let piorJogo = 1
    let qtdRecord = 0
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if (parseInt(pontuacoes[i]) > parseInt(maiorPontuacao)) {
            maiorPontuacao = pontuacoes[i]
            qtdRecord++
        } else if (parseInt(pontuacoes[i]) < parseInt(menorPontuacao)) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    }
    return [qtdRecord, piorJogo]
}


console.log(records(string))