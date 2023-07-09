const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
axios.get(url).then(response => {
    const funcionarios = response.data
    const mulheres = f => f.genero === 'F'

    const china = f => f.pais === 'China'

    const menorSalario = (func, funcAtual) => {
        return func.salario < funcAtual.salario ? func : funcAtual
    }
    
    const func = funcionarios
        .filter(mulheres)
        .filter(china)
        .reduce(menorSalario)
    console.log(func)
})