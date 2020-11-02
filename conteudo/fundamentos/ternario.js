//operadores UNARIOS - tem apenas um operando
//operadores BINARIOS - tem apenas dois operandos
//operadores TERNARIOS - tem três operandos

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' //operador ternario é composto por 3 partes, a primeira é uma expressao que retorna true ou false, e o restante é a resposta caso true e caso false (observacao, perceba que a const resultado recebe uma funcao arraw)

console.log(resultado(7.1))
console.log(resultado(6.1))

