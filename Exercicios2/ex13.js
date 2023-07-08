function filtro(lista){
    return lista.filter(item => typeof item === 'number')
}

console.log(filtro(['Edwin', 12, 'Paulo', 0, 54]))