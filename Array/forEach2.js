Array.prototype.forEach2 = function (callback) { //Cria um metodo semelhante ao forEach
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i)
        // console.log(callback)
    }
}
const aprovados = ['Bia', 'Ana', 'Carloss', 'Leila']

aprovados.forEach2(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})