function inserirUsuario(usuarioObj, successCallback){
    const randomID = idAleatorio()
    const usuarioComId = {...usuarioObj, id: randomID}
    successCallback(usuarioComId)
    
}

function idAleatorio(){
    return Math.floor(Math.random() * 100)
}

function atualizarUsuario(randomID, usuarioObj, successCallback, errorCallback){
    if(!Number.isInteger(randomID) || userID <= 0){
        const errorObj = { message: 'ID do usuario invalido', statusCode: 400}
        errorCallback(errorObj)
        return
    }

    if(typeof usuarioObj !== 'object' || usuarioObj === null){
        const errorObj = {message: 'Objeto de usuario invalido', statusCode: 400}
        errorCallback(errorObj)
        return
    }

    successCallback(usuarioObj)
}

module.exports = inserirUsuario, atualizarUsuario
