//Js é uma linguagem muito dinamica, ou seja temos uma flexibildade enorme, ams por vezes precisamos ter uma certa ordem, ou seja precisamos restringir algumas coisas para que podermos ter o controle ou certe previsibilide.

//Vmaos ver algumas funcoes que vao nos ajudar a ter certos controles

// 1 - Object.preventExtensions - esse cara previne que o objeto seja extendido. ou seja ele evita que sejam adicionados atributos ao objetos, podemos ate excluir ams adicionar nao!
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})
console.log('Extensivel: ', Object.isExtensible(produto))//ele pergunta se o objeto é extensivel ou nao, ou seja no caso como criamo um objeto com o preventExtensions ele vai retornar false pois o objeto nao é extensivel ou seja nao podemos adicionar atributos

produto.nome = 'Borracha'//perceba que podemos fazer alteracoes em atributos que ja existem
produto.descricao = 'Escolar'//porem nao podemos criar novos atributos
delete produto.tag//apenas podemos deletar
console.log(produto)

// 2 - Object.seal - serve para selar ou seja nao podemos adicionar novos atributos, nao podemos excluir elementos existentes podemos apenas alterar!
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))// a exemplo do que ocorre acima o seal tambem tem o seu is onde ele pergunta se este objeto esta selado ou nao, no caso seu retorno sera true pois criamos o objeto a partir do seal

pessoa.sobrenome = 'outro ai de souza'// nao podemos add
delete pessoa.idade //nao podemos deletar
pessoa.idade = 234 // podemos alterar
console.log(pessoa)

// 3 Object.freeze - como ja vimos o freeze basicamente congela o obejto sem poder fazer nenhum tipo de alteracao de atributos!