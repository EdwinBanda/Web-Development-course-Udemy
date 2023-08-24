const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3001

app.use(bodyParser.urlencoded({extended: true }))

app.get('/ola', (req, res)=>{
    // const nome = req.params.nome
    res.send('<h1>Ola!</h1>')
})

app.post('/User', (req, res)=>{
    const nome = req.body.nome
    res.send(nome)
})


app.listen(port)