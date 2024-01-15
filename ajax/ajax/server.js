const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const multer = require('multer')
const port = 8080

app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, "./uploads")
    },
    fileName: function(req, file, callback){
        callback(null, `${Date.now()}_${file.originalname}`)
    },
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req,res)=>{
    upload(req, res, err =>{
        if(err){
            return res.end("Ocorreu um erro!")
        }
        res.end("Concluido com sucesso!")
    })
})

app.post('/formulario', (req, res)=>{
    res.send({
        id: 1,
        ...req.body,
    })
})

app.get('/parOuImpar', (req, res)=>{
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'PAR' : 'IMPAR'
    })
})



app.listen(port,()=>{
     console.log(`Servidor rodando na porta ${port} pohaaaaaa!!!`)
})