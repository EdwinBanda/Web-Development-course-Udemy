const express = require('express')
const conversaoISO = require('./util/date')
const inserirUsuario = require('./users.js')
const atualizarUsuario = require('./users.js')
const app = express()

app.use((req, res, next) => {
    req.currentDate = new Date()
    next()
})

app.use((req, res, next) => {
    const dataISO = conversaoISO(req.currentDate)
    req.currentDateISO = dataISO
    next()
})


app.get('/', (req, res)=>{
    res.status(200).json({usuario: req.novoUsuario})
})

app.get('/agora', (req, res) => {
    res.set('Content-Type', 'text/plain')
    res.status(200).send(req.currentDateISO)
})
app.get('/cadastrarUsuario', (req, res)=>{
    const usuario = {
        nome: 'Edwin Banda',
        email: 'casemiroBanda@gmail.com'
    }

    inserirUsuario(usuario, (usuarioComId)=>{
        res.status(200).json(usuarioComId)
    })
})


app.get('/atualizar-usuario/:id', (req, res)=>{
    const userID = parseInt(req.params.id, 10)

    const userToUpdate = {
        id: userID,
        nome: 'Novo nome',
        email: 'novoemail@example.com'
    }

    atualizarUsuario(userID, userToUpdate,
        (updateUser)=>{
            res.status(200).json(updateUser)
        },
        (error)=>{
            res.status(error.statusCode).json({error: error.message})
        })

})



atualizarUsuario(userID, usuarioAAtualizar, onSuccess, onError)

const port = 4000
app.listen(port, () => {
    console.log('Server running at port 4000')
})