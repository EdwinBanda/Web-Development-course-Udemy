// Boas praticas: Criar um array homogeneo
console.log( typeof Array, typeof new Array, typeof [])
console.log(Array() == [])

let aprovados = ['Bia', 'Carlos','Ana']
console.log(aprovados)

aprovados[3] = 'Paulo'
aprovados.push('Junior')

console.log(aprovados)
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados)
console.log(aprovados.length)

console.log(aprovados[8] === undefined)
console.log(aprovados[8] === null)

aprovados.sort()
console.log(aprovados)

delete aprovados[2]
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2 , 'Elemento1', 'Elemento2')// A partir do indice 1 remova 2 elementos e adicione x elementos

console.log(aprovados)

aprovados.splice(1, 0 , 'Elemento1', 'Elemento2')//('Indice','Exclui', 'Adiciona') A partir do indice 1 remova 0 elementos e adicione x elementos
console.log(aprovados)