let vetor = [2,3,5]
function multi(array, num) {
    array = []
    let novoArray = []
    vetor.forEach(el =>{
        novoArray.push(el * num)
    })
    return novoArray
}

function multiMaisDe5(array, num){
    array = []
    let novoArray1 = []
    if(num > 5){
        vetor.forEach(el =>{
            novoArray1.push(el * num)
        })
        return novoArray1
    }else{
        console.log('O multiplicador eh menor que 5')
    }
}

console.log(multi(vetor, 2))
console.log(multiMaisDe5(vetor,6))
