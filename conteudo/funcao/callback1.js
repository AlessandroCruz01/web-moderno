//padrao de probjeto observer...
//callback quer dizer chamar de volta...

//OBS o que sao assinaturas: Em programação de computadores, especialmente em programação orientada a objetos, um método é normalmente identificado por sua assinatura de método única, que normalmente inclui o nome do método e o número, tipo e ordem de seus parâmetros. Uma assinatura de método é o menor tipo de um método.

const fabricantes = ['Mercedes', 'Ford', 'BMW']

function imprimirNome(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)//Esta assinatura é de uma funcao que pode ser passada para uma funcao forEach() - que é uma funcoa do array
}

fabricantes.forEach(imprimirNome)

fabricantes.forEach(function(a) {
    console.log(a)
})

//perceba que o evento é o loop, onde a funcao é chamada de volta a cada novo elemento encontrado no array

fabricantes.forEach(fabricantes => console.log(fabricantes))

//MAS ENFIM, QUAL A IDEIA DO CALLBACK?
// a ideia do callback é de passar uma funcao para outra funcao. e quando determinado evento acontecer, esta funcao é chamada de volta. ela pode ser executada varias vezes ou uma unica