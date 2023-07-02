const valor = 'global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'local'
    minhaFuncao()
}

exec() // A funcao 'minhaFuncao' obedece o contexto lexico, ou seja, o contexto em que foi declarado