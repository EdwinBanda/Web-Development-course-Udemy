function salario(horasMes, salarioHora){
    const total = horasMes * salarioHora
    return `O salario eh de ${total}`
}
console.log(salario(150, 40.5))