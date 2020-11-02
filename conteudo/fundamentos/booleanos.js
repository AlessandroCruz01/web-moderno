let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo)

console.log(!!isAtivo)//O !! SIGNIFICA NAO NAO, LEMBRE-SE DA TABELA VERDADE

console.log('Os verdadeiros...')
console.log(!!3) //numeros inteiros sao verdade
console.log(!!-1)
console.log(!!' ') //strings sao verdade mesmo so cm o espaco 
console.log(!!'texto') //strings normais
console.log(!![]) //uma lista msm vazia 
console.log(!!{}) //um objeto 
console.log(!!Infinity) //o tipo infinito
console.log(!!(isAtivo = true)) //a atribuicao

console.log('Os falsos ....')
console.log(!!0) //zero é falso
console.log(!!'') //string vazia (perceba sem os espacos)
console.log(!!null) //nulo
console.log(!!NaN) //n é um numero
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Pra finalizar...')
console.log(!!('' || null || 0 || ' '))//ele vai observando e alterando pra verdade. no caso ele vai retornar verdade

//Exemplo do uso do OU||
let nome = ''
console.log(nome || 'Desconhecido') //Perceba que o || vai buscar pelo verdadeiro. como foi visto, strings vazias sao false, entao o || vai pular ele e procurar pelo valor verdade, no caso a string 'Desconhecido'.