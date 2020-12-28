// O array em js na verdade é um objeto. ou seja nao existe um tipo de dados array em js. mas ao inves de organizar em chaves o js organiza os dados a partir de indicies!
console.log(typeof Array)//perceba que a chamada de Array é uma funcao
console.log(typeof new Array)// lembre-se se usar o operadaor new junto de uma funcao o resultado é um objeto!
console.log(typeof [])//agora vamos testar o array literal [] perceba que o resultado é um object

// a boa pratica diz que vc tem que trabalhar com dados homogenios, ou seja faca uma array para cada tipo de dado. se for int o array deve ser int se for float deve ser tudo float!

let aprovados = new Array('Bia', 'Carlos', 'Ana') //Essa forma de criacao de Array nao é indicada. o indicado é usar o array literal. mas por forma de estudo vamos ver este metodo que tambem é valido porem nao indicado!

console.log(aprovados)

// agora vamos criar o mesmo array do formato recomendado:
aprovados = [1,2,3,4]
console.log(aprovados)

//agora vamos ver como acessar os dados deste array, como ja foi citado, o array é acessado a partir de indicies partindo do 0!
console.log(aprovados[0])//neste caso estamos pegando o primeiro item do array
console.log(aprovados[3])

//vamos adicionar um elemento diretamente em um indicie
aprovados[0] = 45
console.log(aprovados)

//Uma forma mais usada para adicionar elementos em um array:
aprovados.push(67)
console.log(aprovados)

//Para saber o tamanho de um array:
console.log(aprovados.length)

//Podemos adicionar elementos em um indicie muito acima, porem teremos uma pequena mudanca, fazendo com  que os indices vazios para traz ficaram por padrao undefined
aprovados[9] = 78
console.log(aprovados)

//Podemos ordenar o array usando o sort
aprovados.sort()
console.log(aprovados)

//Podemos excluir um elemento usando o operador delete
delete aprovados[1]
console.log(aprovados)

// vamos criar de novo o array para vermos outros exemplos mas agora usaremos strings
aprovados = ['bia', 'carlos', 'pedro']

//vamos ver a funcao splice
aprovados.splice(1, 1)//perceba que o splice tanto exclui como adiciona elementos, vejamos seus atributos splice(<a partir de qual indicie>, <numeros de elementos a serem excluidos do indicie passado anteriormente>, <elementos a serem adicionados separados por virgula>)
aprovados.splice(1, 1, 'manole', 'francismo',  'fernando')
console.log(aprovados)
