// O Filter cria um novo array com os dados filtrados de um array original
// Metodo com proposito de filtrar dados em um array

Array.prototype.filtro = function (callback) { // Callback eh uma funcao 
    let novoArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i])){
            novoArray.push(this[i])
        }
    }
    return novoArray
}

const produtos = [
    { nome: "Notebook", preco: 45000, fragil: true },
    { nome: "Ipad", preco: 30000, fragil: true },
    { nome: "Cadeira", preco: 7000, fragil: false },
    { nome: "Copo de vidro", preco: 2500, fragil: true },
    { nome: "Livro", preco: 1700, fragil: false },

]
const produtoFragil = function (p) {
    return p.fragil
}

const produtoCaro = function (p) {
    return p.preco >= 20000
}

console.log(produtos.filtro(produtoFragil).filtro(produtoCaro))