function simboloMais(num){
    let stringMais = ''
    for(let i = 0; i<num; i++){
        stringMais+="+"
    }
    console.log(stringMais)
}
simboloMais(4)

//Ou

function mais(quantidade){
    return "+".repeat(quantidade)
}
console.log(mais(7))