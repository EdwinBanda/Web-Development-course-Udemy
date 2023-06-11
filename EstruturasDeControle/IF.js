function soBoaNoticia(nota){
    if(nota>=7){
        console.log("Aprovado com "+nota)
    }
}
soBoaNoticia(8.1)

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log("E verdade... " + valor)
    }
}
seForVerdadeEuFalo(null)
seForVerdadeEuFalo()
seForVerdadeEuFalo("")
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(" ")
seForVerdadeEuFalo([])
seForVerdadeEuFalo({})