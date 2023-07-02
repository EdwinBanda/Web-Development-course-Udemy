let lista = [3,5,4,6,48,21,255,15,7,92,63,66,18,11,28,13,14,72,23]
let par = 0
let impar = 0
lista.forEach(el =>{
    if(el % 2 == 0){
        par++
    }else{
        impar++
    }
})
console.log(`${par} numeros sao pares e ${impar} numeros sao impares`)