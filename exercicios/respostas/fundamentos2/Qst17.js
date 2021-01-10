const media = (list) => {
    const retorno = list.reduce(function(acumulador, atual){
        return acumulador+atual
    })
    return retorno / list.length
}
console.log(media([0,10]))
console.log(media([1,2,3,4,5]))