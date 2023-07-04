function calculadora(n1, operador, n2){
    switch(operador){
        case "+":
            return n1 + n2
        case "-":
            return n1 - n2
        case "*":
            return n1 * n2
        case "/":
            return n1 / n2
        default:
            return "Operaca invalida!"
    }
}
console.log(calculadora(2,'*', 5))