function bhaskara(ax2, bx, c) {
    let res = []
    let delta = ((bx ** 2) - 4 * ax2 * c)
    if (delta < 0) {
        console.log("Delta eh negativo!")
    } else {
        let x1 = (-bx + Math.sqrt(delta)) / (2 * ax2)
        let x2 = (-bx - Math.sqrt(delta)) / (2 * ax2)
        res.push(x1)
        res.push(x2)
        return res
    }

}
console.log(bhaskara(1, -6, 5))
console.log(bhaskara(3, -5, 12))