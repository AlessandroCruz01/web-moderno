/* Para iniciar a entender os conceitos de Null e Undefined vamos ao console para entender melhor.

para entender melhor, temos que entender o que é atribuicao por valor e atribuicao por referencia

*/

/* No Console digitamos os seguintes testes */

// const a = { name:'Teste'} //Vamos entender o que ocorre por tras. o que realmente a constante a armazena? Neste caso a constante a guarda apenas o endereco de memoria onde o objeto esta armazenado
// const b = a //Neste caso, nos apenas igualamos os enderecos. Ou seja os dois apontam pro msm local

//isso se chama, atribuicao por referencia

//vamos fazer um teste para vizualizar esta acao...

// b.name = 'Viu'

//neste caso, perceba que mesmo usando a const b, a const a tbm sentira a diferenca e tbm vai mudar


/* console:

> const a = {name:'Teste'}
undefined
> const b = a
undefined
> a
{ name: 'Teste' }
> b
{ name: 'Teste' }
> b.name = 'Viu'
'Viu'
> b
{ name: 'Viu' }
> a
{ name: 'Viu' }
>
*/


//Agora vamos observar outro modo de atribuicao

// let a = 3
// let b = a

// b = 4

//perceba que como estamos trabalhando cm tipos primitivos, ele copia o valor em si. ou seja a e b tem valores separados e n o endereco de memoria como acontece quando trabalhamos com objetos. 

/*FIM DO USO DO CONSOLE... */

/*------------------------------------------------ */


/* AGORA VAMOS TRABALHAR CM O CONCEITO DE NULL */

let valor
console.log(valor)
//Perceba que nos pedimos para mostrar no console o valor da variavel valor, mas a msm n foi iniciada, ela foi definida mas n tem valor nenhum dentro dela. nesse caso o retorno sera por padrao Undefined. que é diferente de is not defined, que é quando vc pede para mostrar no console uma variavel que nunca foi declarada. por exemplo, usar o console.log(valor2) sendo que o valor2 nunca foi nem declarado.
// Continuando...

valor = null //Ausencia de valor
console.log(valor) //Perceba que agr a resposta sera NUll. o que significa que ela n guarda nada em si. ou seja é diferente de undefined que quer dizer que a variavel foi declarada mas nao foi iniciada

//OBS: nao é lagal usar o undefined, pois é algo que a propria linguagem vai usar pra avisar quando uma variavel n foi iniciada. caso queira zerar uma variavel de referencia. usar a null

const produto = {}
console.log(produto.preco)//n esta definido o preco dentro de produto
console.log(produto) //Perceba que ele vai retornar um objeto vazio

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined pois isso é usado pela propria linguagem
console.log(!!produto.preco)
console.log(produto) //Preste atencao na estranhesa em um atributo undefined

produto.preco = null //sem preco
console.log(!!produto.preco)
console.log(produto)