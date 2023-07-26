function vetor(notas) {
    // const maior = maior > menor? maior : menor
    return notas.map(el => {
        switch (el) {
            case el > 0 && el < 5:
                el = 'D'
            case el > 5 && el < 7:
                el = 'C'
            case el > 7 && el < 9:
                el = 'B'
            case el > 9:
                el = 'A'
            default:
                "..."
        }
        return notas
    })
}
console.log(vetor([6, 2, 4]))