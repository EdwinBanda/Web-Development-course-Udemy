const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3003

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (req, res)=>{
    console.log(req.body)
    res.send('<h1>Parabens, usuario incluido</h1>')
})
app.post('/usuarios/:id', (req, res)=>{
    console.log(req.params.id)
    console.log(req.body)
    res.send('<h1>Parabens, usuario alterado</h1>')
})

app.listen(port)