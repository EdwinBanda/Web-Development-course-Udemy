// Object.preventExtencions

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promocao'
})
console.log('Extensivel: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Boracha escolar branca'
delete produto.tag
console.log(produto)

//Object.Seal

const pessoa = { nome: 'Juliana', idade: 19 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))


//Object.freeze == Object.Seal + atributos constantes



