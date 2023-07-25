function speakBefore(segundo, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundo * 1000);
    })
}

speakBefore(3, 'Eae galera')
    .then(frase => frase.concat('!!!'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))