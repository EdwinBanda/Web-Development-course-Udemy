//Forma literal
function fun1(){

}

//Armazenar em uma variavel

const fun2 = function(){

}

//Armazenar em um array

const array = [function(a,b){return a + b}, fun1, fun2]
console.log(array[0](2,3))

// Armazenar em um atributo de objecto

const obj = {}
obj.falar = function(){return 'Opah'}
console.log(obj.falar())

//Passar uma funcao como parametro para outra funcao

function run(fun){
    fun()
}

run(function(){console.log("Executando")})

//Uma funcao pode retornar/conter uma funcao

function soma(a,b){
    return function(c){

        console.log(a + b + c)
    }
}
soma(2,3)(4)