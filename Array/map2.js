let carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//Retorna um array apenas com os precos
let paraObjecto = json => JSON.parse(json)
let apenasPreco = produto => parseFloat(produto.preco).toFixed(2)

const res = carrinho.map(paraObjecto).map(apenasPreco)
console.log(res)
