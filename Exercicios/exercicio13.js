function diasDaSemana(num) {
    switch (num) {
        case 1: console.log("Domingo, dia nao util")
            break
        case 2:
        case 3:
        case 4:
        case 5:
        case 6: console.log("Dia util")
            break
        case 7: console.log("Sabado, dia nao util")
            break
        default: console.log("Dia invalido!")

    }
}
console.log(diasDaSemana(5))