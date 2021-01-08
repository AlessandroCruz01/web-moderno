const objetoParaArray = (obj) => {
    return Object.entries(obj)
}

console.log(objetoParaArray({
    nome: 1,
    idade: 3
}))