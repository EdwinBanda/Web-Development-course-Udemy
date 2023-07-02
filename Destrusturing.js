// Novo recurso ES6

const pessoa = {
    nome: "ana",
    idade: 5,
    endereco:{
        logradouro: "Rua ABC",
        numero: 1000
    }
}

const {nome, idade} = pessoa // Tirar o atributo nome e idade do objecto pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa // "n" e "i" sao as novas variaveis do nome e idade
console.log(n,i)

//const {sobrenome, feminio = true} = pessoa // atributos undefined
//console.log(sobrenome, feminino)

const {endereco: {logradouro, numero}} = pessoa
console.log(logradouro, numero)