//promise é promessa ou seja é algo que resolveremmos no futuro!

const { promises } = require("fs")

let a = 1 //quando definimos uma variavel, na linha seguinte ja temos ela disponivel para nosso uso!
console.log(a)

//Quando criamos uma promessa (promise), nós teremos uma promessa de algo que sera executado no futuro e algo que a sera devolvido no futudo. Entao associado a uma promessa teremos um valor de algo, seja um number, string, boolean e etc... para gerarmos esse dado, precisamos passar uma funcao para promise. e lembresse, uma promise por si so é uma funcao...

console.log(typeof Promise)

//Ou seja essa funcao recebe como parametro uma funcao quando quiser cumprir a promessa....

let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(3)
})

console.log(typeof p)//Perceba que quando a promise quando usada com o operador new ele se torna um objeto

//Beleza, mas como acessamos o valor que foi gerado? 
    //R= usando o .then 
        //then por sua vez recebe como parametro uma funcao!

p.then(function(valor) {
    console.log(valor)//perceba que o resultado é exatamente o valor 3
})


