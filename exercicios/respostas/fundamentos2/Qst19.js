const menorNumero = (list) => {
    let retorno = Math.min(...list)
    return retorno
}

console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([5, -15, 50, 3]))