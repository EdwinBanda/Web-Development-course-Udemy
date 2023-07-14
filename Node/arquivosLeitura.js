const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//metodo Sincrono
const conteudo = fs.readFileSync(caminho, "utf-8")
// console.log(conteudo)

//metodo Assincrono
fs.readFile(caminho, "utf-8", (err, conteudo)=>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

//metodo tradicional
const dados = require('./arquivo.json')
console.log(dados.db)

fs.readdir(__dirname, (err, arquivos)=>{
    console.log(`conteudo da pasta:`)
    console.log(arquivos)
})