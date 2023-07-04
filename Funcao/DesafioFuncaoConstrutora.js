function pessoa(nome){
    this.nome = nome

    this.falar = function(){
        console.log(`Meu nome eh ${nome}`)
    }
}