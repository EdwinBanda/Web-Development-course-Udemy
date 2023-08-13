function esperarPor(tempo = 1000) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, tempo)
    })
}

// esperarPor(2000)
//     .then(()=> console.log('Executando Promise 1...'))
//     .then(esperarPor)
//     .then(()=> console.log('Executando Promise 2...'))
//     .then(esperarPor)
//     .then(()=> console.log('Executando Promise 3...'))

function retornarValor(){
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve(10)
        }, 3000);
    })
}

async function retornarValorRapido(){
    return 20
}

async function executar(){
    let valor = await retornarValorRapido()

    await esperarPor(1500)
    console.log(`Async/await ${valor}...`)

    await esperarPor(1500)
    console.log(`Async/await ${valor + 1}...`)
    
    await esperarPor(1500)
    console.log(`Async/await ${valor + 2}...`)

    return valor + 3
}

async function executarDeVerdade(){
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()

