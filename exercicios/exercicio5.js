function decimal(num){
    return num.toFixed(2).toString().replace(".",",")
}

console.log(`R$${decimal(13.0555540)}`)