//Clouse eh o escopo criado quando uma funcao eh declarada
//Esse escopo permite a funcao acessar e manipular variaveis externas á funcao

//Contexto lexico em accao

const x = 'global'

function fora(){
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro
}
const minhaFuncao = fora()
console.log(minhaFuncao())