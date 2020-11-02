//agora vamos ver a desestruturacao de um array

const [a] = [10] //aqui dissemos que a constante 'a' recebera o valor [10] de dentro de um array
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10,7,9,8] //nesse exemplo, pegamos multiplos elementos de um array cm o ponto de podermos ignorar uns ou outro. explicando... essa linha de codigo nos diz: atribua a as variaveis n1 a posicao 0 do array no caso 10, a virgula sozinha n é um erro, ela na vdd esta nos dizendo, ignore a proxima posicao no caso a posicao 1 do array que seria o 7 sera igonorado. seguindo, atribua a cariavel n3 o valor do array na posicao 2 ou seja o 9, segundo temos outra virgula que nos diz novamnente. Ignore a proxima posicao do array que seria o 8, apos isso temos um n5 que n existe dentro do array, pois este array tem apenas 4 posicoes sendo que estas ja foram preenchidas... entao por padrao n5 sera undefined e finalmente n6 tem seu valor padrao 0.
console.log(n1, n3, n5, n6)

// e para estruturas aninhadas. ou seja arrays dentro de array

const [, [, nota]] = [[,8,8], [,80,8]]
console.log(nota)