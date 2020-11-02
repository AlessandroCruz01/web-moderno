const peso1 = 1.0 // 1.0 é considerado inteiro, se fosse 1.1 ai sim seria float
const peso2 = Number('2.0') //outra forma de declarar variavel do tipo number

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //para saber se o valor da variavel é inteiro
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media) // Perceba que o valor vira com varias casas decimais. para resolver isso. temos varias funcoes dentro de number que veremos agora

console.log(media.toFixed(2)) // o toFixed faz a fixacao de casas apos o ponto flutuante, neste caso havera apenas daus casas

console.log(media.toString(2)) //mostra a variavel tipo number como string, podemos ve-lo em formato de binario de adicionar o parametro 2

console.log(typeof(media))
console.log(typeof(Number)) // Perceba que usamos duas vezes a palavra reservada number, so que com um "N" e "n", isso acontece pq quando usamos o Number, estamos nos referindo a uma funcao, e quando vemos o number, nos referimos ao tipo da variavel


console.log(Number.isInteger(peso1)) // Pergunta se o valor de peso1 é inteiro


