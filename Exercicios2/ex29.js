function segundoMaior(array) {
    return array.reduce((res, atual) => {
        return res > atual && res < atual ? res : atual
    })
}
console.log(segundoMaior([2, 17, 6, 74, 22]))