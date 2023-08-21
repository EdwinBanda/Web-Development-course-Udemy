function temporizador(num) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(num * 2)
        }, 5000);
    })
}
temporizador(5)
    .then(console.log)