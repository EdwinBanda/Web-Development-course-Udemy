
let lista = [2, -1, 4, 7, -3, 5, -12, 11, 40, -0.5, 8]
let i = 0
lista.forEach(el =>{
    if(el<0){
        // console.log(el)
        i++
    }
})
console.log(`${i} elementos negativos no array`)
