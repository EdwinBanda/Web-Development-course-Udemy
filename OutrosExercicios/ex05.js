async function downloadInfo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Download concluido!')
            reject('Erro ao baixar arquivo')
        }, 5000);
    })
}

downloadInfo()
    .then(console.log)
    .catch(err => console.error(err))
