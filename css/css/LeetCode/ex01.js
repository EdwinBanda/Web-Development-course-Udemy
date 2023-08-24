class animals {
    constructor(surName) {
        this.surName = surName
        // latir(){
        //     console.log('hoof hoof!')
        // }

    }
}

class dog extends animals {
    constructor(name = 'Pluto') {
        super('Bonny')
        this.name = name
    }
}
const checkIfInstanceOf = async function (obj, classFunction) {
    if (obj === null || obj === undefined || typeof classFunction !== 'function') {
        return await false
    }
    return obj instanceof classFunction // Verifica se um objeto eh instancia de uma classe especifica, retorna true/false
    // const prototype = Object.getPrototypeOf(obj)
    // if (prototype) {
    //     if (prototype === classFunction.prototype) {
    //         return await true
    //     }
    // }
};
const mydog = new dog()
console.log(dog.prototype)

checkIfInstanceOf(mydog, animals)
    .then(console.log)
