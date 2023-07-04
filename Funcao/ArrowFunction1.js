 let dobro = function(a){ // Forma literal
    return 2 * a
 }

 dobro = (a) => {  // Arrow function normal
    return 2 * a
 }

 dobro = a => 2 * a // Return implicito
 console.log(dobro(Math.PI))

 ola = () => 'Ola!'
 ola = _ => 'Ola!' // "_" Eh um parametro
 console.log(ola())