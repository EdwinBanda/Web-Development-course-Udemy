//function declaration
console.log(soma(3,4)) 

function soma(x,y){ //Essa funcao pode ser chamada antes, como no exemplo acima
    return x + y
}

//function expression

const sub = function(x,y){
    return x - y
}
console.log(sub(3,4))

// named function expression

const mult = function mult(x,y){
    return x * y
}
console.log(mult(3,4))