function meuObjecto(){}
console.log(meuObjecto.prototype)

const obj1 = new meuObjecto
const obj2 = new meuObjecto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(meuObjecto.prototype === obj1.__proto__)

meuObjecto.prototype.nome = "Anonimo"
meuObjecto.prototype.falar = function(){
    console.log(`Bom dia!, meu nome eh ${this.nome}`)
}

obj1.falar()
obj2.nome = 'Edwin'

obj2.falar()

const obj3 = {}
obj3.__proto__ = meuObjecto.prototype
obj3.nome = 'obj3'
obj3.falar()

console.log((new meuObjecto).__proto__ === meuObjecto.prototype)
console.log(meuObjecto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === null)

