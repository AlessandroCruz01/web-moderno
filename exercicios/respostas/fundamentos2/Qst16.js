const totoalDespesas = (list) => {
    const retorno = list.map(e => e.preco).reduce(function(acumulador, atual){
        return acumulador + atual
    })
    return 'R$ ' + retorno.toFixed(2)
}

console.log(totoalDespesas([
    {nome: "Jornal", categoria: "Papel", preco: 89.99},
    {nome: "Cinema", categoria: "Eletronicos", preco: 105.25},
    {nome: "MacBook", categoria: "Eletronicos", preco: 92.60},
    {nome: "Tv", categoria: "Eletronicos", preco: 101.60},
]))