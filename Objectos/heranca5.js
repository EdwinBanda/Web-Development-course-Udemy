console.log(typeof(String))
console.log(typeof(Array))
console.log(typeof(Object))

String.prototype.reverter = function(){
    return this.split('').reverse().join('')
}
console.log('Escolar cod3r'.reverter())

Array.prototype.primeiro = function (){
    return this[0]
}

console.log([1,2,3,4,5].primeiro())
console.log(['a','b','c'].primeiro())
