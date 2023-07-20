const express = require('express')
const app = express()
const conversaoDataISO = require('./util/date.js')
const {inserirUsuario} = require('./users.js')

app.use((req, res, next) => {
    req.currentDate = new Date()
    next()
})

app.use((req, res, next) => {
    const isoDate = conversaoDataISO(req.currentDate)
    req.currentDateISO = isoDate
    next()
})

app.get('/', (req, res) => {
    res.status(200).json({ currentDateISO: req.currentDateISO })
})

app.get('/agora',(req,res,)=>{
    res.set('Content-Type', 'text/plain')
    res.status(200).send(req.currentDateISO)
})

app.get('/inserir-usuario', (req, res)=>{
    const user = {
        nome: 'Edwin Banda',
        email: 'casemirobanda@gmail.com'
    }

    inserirUsuario(user, (usuarioComID)=>{
        res.status(200).json(req.usuarioComID)
    })
})




const port = 4000
app.listen(port, () => {
    console.log(`Aplicacao rodando na porta ${port}`)
})