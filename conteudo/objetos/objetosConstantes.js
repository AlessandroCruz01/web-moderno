//uma variavel / constante aponta para um endereco de memoria e esse endereco aponta para um objeto

//pensemos assim : const -> <end memoria> -> {..obj}
/*Por exemplo*/
const pessoa = { nome: 'Joao' }//perceba que a constante pessoa aponta para um endereço de memoria onde este endereço aponta para 'joao'
pessoa.nome = 'Pedro'//Perceba que a constante pessoa esta recebendo o endereco de memoria e nao o objeto!
console.log(pessoa)//Neste caso alteramos apenas o objeto mas a constante em si (endereco pra onde ela aponta) continua imutavel!

Object.freeze(pessoa) //o freeze serve para conjelar o objeto, onde  agr nem mesmo os atriubutos do objeto podem ser alterados

pessoa.name = 'Maria' //perceba que tentamos mudar o atributo nome

console.log(pessoa)//Perceba que ele ignorou a tentativa de modificação!


