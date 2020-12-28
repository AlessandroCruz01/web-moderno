const aprovados =  ['Aghata', 'Aldo', 'Leo', 'Manoel']
// quando uma função é passada como um argumento de outra, ela é, então, chamada de callback

aprovados.forEach(function(nome, indicie){//perceba que o forEach apenas percorre o array, entao passamos como parametro uma callback, onde para cada item do array ele vai passar para funcao callback o atributo nome e seu indice+1, ja que os indicies comecam em 0 colocamos +1 para ficar melhor
    console.log(`${indicie+1}) ${nome}`)
})

//O INDICIE SEMPRE É PASSADDO COMO SEGUNDO PARAMETRO E NUNCA COMO PRIMEIRO!

aprovados.forEach(nome => console.log(nome))

//perceba que o forEach precisa de uma funcao para saber o que fazer em cada elemento do array.

//podemos tambem armazenar uma funcao em uma variavel e passar apenas a variavel

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

//A FUNCAO CALLBACK QUE É PEDIDO PELO FOREACH PODE TER ATE 3 PARAMETROS. o item, o indice e o proprio array!!!