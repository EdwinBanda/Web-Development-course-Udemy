function tratarErroELancar(erro){
    throw new Error("...")
    
}

function imprimirNomeGritado(obj){
    try{

        console.log(obj.name.toUpperCase() + "!!!")
    }catch (e){
        tratarErroELancar(e)
    }finally{
        console.log("Final")
    }
}

const obj = {name : 'Edwin'}
imprimirNomeGritado(obj)