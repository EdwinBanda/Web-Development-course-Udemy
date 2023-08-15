function booleanNumeric(param){
    if(typeof(param) == "boolean"){
        return !param
    }else if(typeof(param) == "number"){
        return -param
    }else{
        return `Somente valores booleanos ou numericos esperados, o parametro eh do tipo ${typeof(param)}`
    }
}

console.log(booleanNumeric('5'))