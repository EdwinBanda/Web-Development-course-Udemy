class expiringKeyValueStore{
    constructor(){
        this.dados = new Map()
    }

    set(chave, valor, duracao){
        const dataValidade = Date.now() + duracao
        if(this.dados.has(chave) && this.dados.get(chave).validade > Date.now()){
            this.dados.get(chave) = valor
            this.dados.get(chave).validade = dataValidade
            return true
        }
        this.dados.set(chave, {valor, validade: dataValidade})
    }

    get(chave){
        if(!this.dados.get(chave) || this.dados.get(chave).validade <= Date.now()){
            return -1
        }
        return this.dados.get(chave).valor
    }
    count(){
        const tempoAtual = Date.now()
        let count = 0
        for(const [chave, dados] of this.dados.entries()){
            if(dados.validade > tempoAtual){
                count++
            }
        }
        return count
    }
}

const loja = new expiringKeyValueStore()

loja.set('Nome', 'Edwin', 400)
loja.set('Idade', 19, 600)

console.log(loja.get('Nome'))
console.log(loja.get('Idade'))

setTimeout(() => {
    console.log(loja.get('Nome'))
    console.log(loja.count())
}, 500);