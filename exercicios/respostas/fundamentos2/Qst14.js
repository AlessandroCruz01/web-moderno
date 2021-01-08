const receberSomenteParesDeIndicesPares = (e) => {
    let retorno = []
    for (let i = 0; i < e.length ; i++){
        if (i % 2 === 0 && e[i] % 2 === 0){
            retorno.push(e[i])
        }
    }
    return retorno
}

console.log(receberSomenteParesDeIndicesPares[10,70,22,43])