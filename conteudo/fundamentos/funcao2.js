//Armazenando uma funcao dentro de uma variavel
const imprimirSoma = function (a, b) { //perceba que a const esta recebendo uma funcao anonima ou seja uma funcao sem nome
    console.log(a+b)
}

imprimirSoma(2,3)

//Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => { //essa seta => substitui o nome function
    return a + b
}
console.log(soma(2,3))

//Retorno implicito
const subtracao = (a,b) => a-b
console.log(subtracao(5,5))
