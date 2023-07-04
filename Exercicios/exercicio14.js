function frutaria(string) {
    switch (string) {
        case "maca": console.log("Nao vendemos essa fruta aqui!")
            break;
        case "kiwi": console.log("Estamos com escasses de kiwis!")
            break
        case "melancia": console.log("Aqui esta, sao 3 reais o quilo!")
            break
        default: "Nao temos a fruta!"
    }
}
console.log(frutaria("kiwi"))