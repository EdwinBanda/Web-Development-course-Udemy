async function sleep(millis) {
    await setTimeout(() => {
        console.log('Finish!!!')
    }, millis);
}

let t = Date.now()
console.log(t)
sleep(100)
    .then(() => console.log(Date.now() - t))
