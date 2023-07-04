function getPreco(imposto = 0, moeda = "R$"){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: "NoteBook",
    preco: 9000,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = {
    preco : 225000,
    desc : 0.20
}

//Call
console.log(getPreco.call(carro, 0.16, "MT"))
//Aplly
console.log(getPreco.apply(carro, [0.16, "MT"]))
