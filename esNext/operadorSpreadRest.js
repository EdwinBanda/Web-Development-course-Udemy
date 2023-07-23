// operador ... rest(juntar) / spread(espalhar)
// usar rest como parametro de funcao

// usar spread com objeto
const functionario = {nome: 'Maria', salario: 12348.99}
const clone = {ativo: true, ...functionario}
console.log(clone)

// usar spread com array
const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafael']
console.log(grupoFinal)