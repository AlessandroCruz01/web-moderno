function soma() {//perceba que nessa funcao, nao pedimos parametros. o que nao significa que n podemos dar paramtros  kkkkk 
    let soma = 0
    for (i in arguments) {
        soma += arguments[i] //O arguments nada mais é que um array interno da funcao kkk, entendeu. por mais que n tenha parametros nessa funcao. vc pode dar parametros a ela e usando o arguments vc armazena esses parametros em um array
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(2,2))
console.log(soma(2,2,2))

//aberracoes kkkk
console.log(soma(2,2, 'teste')) //nao ficamos presos a numbers, a logica n nos prende. no caso ele pode concatenar cm strings
console.log(soma([1,2,3,4]))