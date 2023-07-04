function carro(velocidademax = 200, delta = 5){
    // Atributo privado
    let velocidadeAtual = 0

    // Metodo publico
    this.acelerar = function(){
        if(velocidadeAtual = delta <= velocidademax){
            velocidadeAtual =+ delta
        }else{
            velocidadeAtual = velocidademax
        }
    }
    //Metodo publico
    const getvelocidadeaAtual = function(){
        return velocidadeAtual
    }
}

const uno = new carro
uno.acelerar()
console.log(uno.getvelocidadeaAtual())

const ferrari = new carro(320, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getvelocidadeAtual())