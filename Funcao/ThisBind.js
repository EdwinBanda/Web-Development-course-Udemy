const pessoa = {
    saudacao : "Bom dia!",
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()

const falarPessoa = pessoa.falar.bind(pessoa)
falarPessoa() 