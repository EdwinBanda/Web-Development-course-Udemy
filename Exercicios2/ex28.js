function filtroPorQuantidade(array, quantidade) {
    const nums = a => String(a).length == quantidade
    return array.filter(nums)
}
console.log(filtroPorQuantidade([2, 54, 5, 624, 1, 87], 2))