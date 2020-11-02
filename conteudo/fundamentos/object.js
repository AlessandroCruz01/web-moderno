const prod1 = {} //um par de chaves, representa um objeto
prod1.nome = 'celular ultra mega' 
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //evitar atributos cm espacos

/* 
Em js o objeto é uma colecao de chave-valor
-> preste atencao que criamos um objeto, e em seguida demos uma chave 'nome' e o valor.
*/

console.log(prod1)

const prod2 = { //Existe esta forma de declaracao literal, abrindo chaves e ja declarando as propriedades
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 41, //veja que vc pode colocar objetos dentro de outros objetos
    }
}

//ISSO N É MSM COISA DE JSON

/* jSON (Java Script Object Notation) é um formato textual de comunicacao entre sistemas */

console.log(prod2)