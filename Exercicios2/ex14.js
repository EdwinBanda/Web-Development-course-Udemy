function lista(obj){
    Object.entries(obj).forEach(([key, value])=>{
        console.log(`${key}: ${value}`)
    })
}
lista({nome: 'Edwin', altura: 175, peso: 65})