const escola = 'Cod3r'

console.log(escola) // lembre-se , strings sao nada mais nada menos que uma cadeia de caracteres

//Assim como vimos ate agr com number que possui suas funcoes. no tipo string tbm ocorre, veremos agr as funcoes que tem em strings

console.log(escola.charAt(4)) // o charAt, retona a letra correspondente ao numero da casa que damos por parametro, por exemplo 4 (lembre-se que se comeca pelo indicie zero ou seja, no caso da casa 4 seria 0 1 2 3 4- letra nesse casa)

console.log(escola.charCodeAt(3)) // pega o valor correspondente a esta na casa na tabela asch

console.log(escola.indexOf('C')) //traz a casa se existir o caractere que passamos por parametro

console.log(escola.substring(1)) //Retorna todas as letras contidas da casa 1 ate o final incluindo o proprio indicie 1
console.log(escola.substring(0,3)) //Retorna do indicie 0 ate o 3 sem incluir o proprio 3 ou seja, o elemento contido na casa 3 n sera apresentado

console.log('Escola '.concat(escola).concat(" !")) //Faz a concatenacao ou seja. faz a juncao de strings
console.log('Escola ' + escola +" !") //Faz a concatenacao ou seja. faz a juncao de strings

console.log(escola.replace(3, 'E')) //Faz a troca de um elemento por outro

console.log('Ana, maria, pedro'.split(',')) // gera uma lista, a partir do elemento que passamos por parametro