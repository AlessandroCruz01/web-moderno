/* 
Java Script Object Notation - JSON = Json é um formato textual que é diferente da notacao literal de objetos
*/

//Vamos ver as diferencas de JSON e Objetos
const obj = {a: 1, b: 2, c: 3, soma() {
    return a+b+c
}}

console.log(JSON.stringify(obj))//Funcao para transformar obj em JSON

//Perceba que ao tranformar o obj em JSON a funcao é ignorada, pois como ja foi dito JSON é um formato de texto! ele serve para comunicar tecnologias totalmente diferentes pois sendo um formato textual, todas as linguagens conseguem ler!

//JSON é um formato de dados, ou seja sendo textual ele é diferente de obj em js

// agr vamos passar um JSON para um obj

//console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")) -> Perceba que esse formato nao é um formato de JSON válido!

//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")) -> este tambem nao é um formato de JSON válido!

//Agora vamos entender, o pq de nao estar certo é pq todo atributo no formato JSON todo atributo deve ser delimitado cm aspas duplas

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))//FORMATO VÁLIDO!

console.log(JSON.parse('{ "a" : 1, "b" : "string", "c" : true, "d" : {}, "e" : [], "f" : 1.5 }'))

//https://jsonlint.com/