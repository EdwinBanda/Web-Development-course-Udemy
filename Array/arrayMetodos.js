const pilotos = ['Joao', 'Antonio', 'Pablo', 'Julio']
pilotos.pop() // Remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Vania') // Adiciona um elemento a ultima posicao do array
console.log(pilotos)

pilotos.shift() // Revome o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Edwin') //Adiciona um elemento ao primeiro indice (Oposto do shift)
console.log(pilotos)

//Splice pode adicionar e remover elementos

//Splice adicionar
pilotos.splice(2,0,'Carlos','Dercio') // A partir do indice 2, remova 0 elementos e adiciona x elementos
console.log(pilotos)

//Splice remover
pilotos.splice(2,1) // A partir do indice 2 remova 1 elemento
console.log(pilotos)

//Slice: O Slice cria um novo array
const algunsPilotos1 = pilotos.slice(2) //Novo array a partir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) // Novo array da posicao 1 ate 4
console.log(algunsPilotos2)