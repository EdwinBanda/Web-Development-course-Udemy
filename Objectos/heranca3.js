const pai = { nome: "Pedro", corDoCabelo: "Preto" }

const filha1 = Object.create(pai)
filha1.nome = "Ana"
console.log(filha1.corDoCabelo)

const filha2 = Object.create(pai, {
    nome: {
        value: 'Maria',
        writable: false, //Nao pode ser sobre-escrito
        enumerable: true //Sera enumerado, ou apresentado
    }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corDoCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`por heranca: ${key}`)
}
