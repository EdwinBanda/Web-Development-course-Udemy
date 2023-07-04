function numeros(inicio = 0, fim = 100) {
    for (let i = inicio; i < fim; i++) {
        if (i % 2 != 0) {
            console.log(i)
        }
    }
    if(inicio > fim){
        for (let i = fim; i < inicio; i++) {
            if (i % 2 != 0) {
                console.log(i)
            }
        }
    }
}
numeros(20,1)