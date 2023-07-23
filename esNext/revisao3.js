// ES8: Object.values/Object.entries
const obj = {a: 1, b:2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na notacao literaria
const nome = 'Carla'
const pessoa = {
    nome,
    falar(){
        return 'Oi pessoal'
    }
}

console.log(pessoa.nome, pessoa.falar())

// Class
class Animal{}
class Cachoro extends Animal{
    latir(){
        return 'Au AU!'
    }
}
console.log(new Cachoro().latir())