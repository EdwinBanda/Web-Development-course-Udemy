async function calcularSoma(x) {
    const funcao = async (num)=>{
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(num)
            }, 5000);
        })
    }

    const a = await funcao(10)
    const b = await funcao(20)
    const c = await funcao(30)
    return x + a + b + c
}

//Output assim
(async ()=>{
    const resultado = await calcularSoma(5)
    console.log(resultado)
})()

//Ou assim
calcularSoma(4)
    .then(resultado => resultado)
    .then(console.log)