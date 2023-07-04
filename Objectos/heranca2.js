Object.prototype.atrib0 = "0" // Dont do this at home
const avo = { atrib1: "A" }
const pai = { __proto__: avo, atrib2: "B", atrib3: "3" }
const filho = { __proto__: pai, atrib3: "C" }

console.log(filho.atrib0, filho.atrib2)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },

    status() {
        return `${this.velAtual}Km/h de ${this.velMax}`
    }
}

const ferrari = {
    modelo: "f40",
    velMax: 324 //Shadowing
}

const volvo = {
    modelo: "v40",
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
volvo.acelerarMais(100)
console.log(volvo.status())