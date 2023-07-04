const pessoa = Object.freeze({ nome: 'Edwin'})
pessoa.nome = 'Maria'
console.log(pessoa.nome)