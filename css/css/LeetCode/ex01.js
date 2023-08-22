class animal{
    constructor(surName){
        this.surName = 'bonny'
        // latir(){
        //     console.log('hoof hoof!')
        // }

    }
}

class dog extends animal{
    constructor(surName){
        this.name= 'Pluto'

    }
}
const checkIfInstanceOf = function(obj, classFunction) {
    if(obj === null || obj === undefined || typeof classFunction !== 'function'){
        return false
    }
    const prototype = Object.getPrototypeOf(obj)
    if(prototype){
        if(prototype === classFunction.prototype){
            return true
        }
    }
};

console.log(checkIfInstanceOf(new dog(), animal))