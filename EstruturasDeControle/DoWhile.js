function getNumAleatorio(min,max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

opcao = 0

do{
    opcao = getNumAleatorio(-1,10)
    console.log(opcao)
}while(opcao != -1)

