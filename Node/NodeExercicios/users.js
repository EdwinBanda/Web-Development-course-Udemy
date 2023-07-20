// const { uniqueId } = require("lodash");

function inserirUsuario(obj,callback){
    const idAleatorio = Math.floor(Math.random() * 1000)
    const usuarioComID = {...obj, id: idAleatorio}

    callback(usuarioComID)
}
module.exports = {inserirUsuario}