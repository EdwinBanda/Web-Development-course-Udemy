//var e let
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

//Template String
const produto = 'ipad'
console.log(`${produto} eh caro!`)

//Destructuring

const [l,e, ...tras] = 'cod3r'
console.log(l,e, tras)

const [x, , y] = [1,2,3]
console.log(x,y)

const {idade: idd, nome} = {nome: 'Edwin', idade: 19}
console.log({nome, idd})