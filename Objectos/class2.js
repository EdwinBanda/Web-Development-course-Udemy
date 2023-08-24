class avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class pai extends avo {
    constructor(sobrenome, profissao = 'professor'){
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends pai{
    constructor(name = 'Antonio'){
        super('Silva')
        this.name = name
    }
}

const filho = new Filho
console.log(filho)
