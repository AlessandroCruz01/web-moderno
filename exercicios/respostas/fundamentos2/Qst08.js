const repetir = (elemento, vezes) => {
    let retorno = []
    while (vezes > 0){
        retorno.push(elemento)
        vezes--
    }
    return retorno
}

console.log(repetir("Codigo", 2))
console.log(repetir(7 , 3))