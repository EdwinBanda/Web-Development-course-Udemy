//1. funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b);
}

imprimirSoma(2, 3)
imprimirSoma(2) //Soma um numero com um valor undefined
imprimirSoma(2,3,5,7) //Ignora o resto
imprimirSoma() //Soma dois valores undefined

//Funcao com retorno

function soma(a, b = 1){
    return a + b;
}
console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())