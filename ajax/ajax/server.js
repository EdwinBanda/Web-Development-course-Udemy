const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 8080

app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())



app.listen(port,()=>{
     console.log(`Servidor rodando na porta ${port} pohaaaaaa!!!`)
})