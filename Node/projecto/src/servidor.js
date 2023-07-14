const porta = 3003

const express = require('express')
const app = express()

app.get('/produtos', (req, resp, next)=>{
    resp.send({nome: 'Laptop', preco: 45000}) //Converter para JSON 
})

app.listen(porta, ()=>{
    console.log(`Servidor esta executando na porta ${porta}`)
})