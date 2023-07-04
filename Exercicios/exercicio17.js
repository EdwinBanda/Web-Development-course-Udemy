function calculoSalario(plano, salario) {
    switch (plano) {
        case "a":
            novoSalario = salario + (salario * 0.10)
            console.log(`Seu novo salario eh ${novoSalario}`)
            break
        case "b":
            novoSalario = salario + (salario * 0.15)
            console.log(`Seu novo salario eh ${novoSalario}`)
            break
        case "c":
            novoSalario = salario + (salario * 0.20)
            console.log(`Seu novo salario eh ${novoSalario}`)
            break
    }
}
console.log(calculoSalario("c", 2000))