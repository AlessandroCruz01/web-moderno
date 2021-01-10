const totoalDespesas = (list) => {
    list.map(e => e.preco).reduce(function(acumulador, atual){
        return acumulador + atual
    })
}