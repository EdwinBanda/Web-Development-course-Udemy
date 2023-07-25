const equipes = new Set()
equipes.add('Barcelona')
equipes.add('Benfica')
equipes.add('Real Madrid')
console.log(equipes.has('Real Madrid'))
equipes.delete('Real Madrid')
console.log(equipes.has('Real Madrid'))

const nomes = ['Joao', 'Maria', 'Roberto']
nomesSet = new Set(nomes)
console.log(nomesSet)