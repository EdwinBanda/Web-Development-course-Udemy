//Funcoes factory retornam objectos

//Factory simples

function criarPessoa(){
    return {
        nome: 'Edwin',
        sobrenome: 'Banda'
    }
}
console.log(criarPessoa())