let listaInt = [2,5,7,6]
let listaString = ['eu','mim','gato','nao']
let listaDouble = [2.5,1.8,4.9,8.3]

function concater(...args){
    resultado = []
    for(let i = 0; i<arguments.length;i++){
        resultado = resultado.concat(arguments[i])
    }
    console.log(resultado)
}
concater(listaDouble,listaInt)
