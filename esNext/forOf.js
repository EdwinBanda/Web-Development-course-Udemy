// "For of" itera sobre os valores, For in itera sobre os indices

for(let letra of "cod3r"){
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for(let i in assuntosEcma){ // Itera sobre os indices
    console.log(i)
}

for(let chave of assuntosEcma){ // Itera sobre os valores
    console.log(chave)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for(let chave of assuntosMap){
    console.log(chave)
}

for(let chave of assuntosMap.keys()){
    console.log(chave)
}

for(let valor of assuntosMap.values()){
    console.log(valor)
}

for(let [chave,valor] of assuntosMap.entries()){
    console.log(chave,valor)
}

const s = new Set(['a','b','c'])
for(let letra of s){
    console.log(letra)
}