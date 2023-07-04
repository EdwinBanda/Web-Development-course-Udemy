function string(string1, string2) {
    let estaContido = true
    for (let i = 0; i < string1.length; i++) {
        const charString1 = string1.charAt(i).toLowerCase()
        for (let j = 0; j < string2.length; j++) {
            const charString2 = string2.charAt(j).toLowerCase()
            if (charString1 == charString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if (!estaContido) {
            return estaContido
        }
    }

    for (let i = 0; i < string2.length; i++) {
        charString2 = string2.charAt(i).toLowerCase()
        for (let j = 0; j < string1.length; j++) {
            charString1 = string1.charAt(j).toLowerCase()
            if (charString2 == charString1) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if (!estaContido) {
            return estaContido
        }
    }
    return estaContido
}
console.log(string('hello', 'ollhE'))