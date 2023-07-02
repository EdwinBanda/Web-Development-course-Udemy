const pessoa = {
    nome : "Edwin",
    idade: 19,
    peso: 66
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor])=>{
    console.log(`${chave}: ${valor}`)
})

Object.values(pessoa).forEach( e =>{
    console.log(`${e}`)
})

Object.defineProperty(pessoa, 'dataNasc', {
     enumerable: true,
     writable: false,
     value: '06/09/2004'
})

console.log(Object.keys(pessoa))
console.log(pessoa.dataNasc)

const dest = {a: 1}
const o1 = {b: 2, c: 5}
const o2 = {a: 4}

const obj = Object.assign( dest, o1, o2)
console.log(obj)