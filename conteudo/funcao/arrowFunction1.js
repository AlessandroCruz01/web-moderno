//Na versao do ES2015, foi introduzido o tipo de funcao arrow que truxe duas novidades. uma delas é a sintaxe reduzida e a outra é que o this nao varia...

//vamos focar na sintaxe comparando a como era escrito antes de 2015

let dobro = function(a) {
    return 2*a
}

dobro = (a) => { //Uma caracteristica importante das funcoes arrow é que elas sempre sao anonimas ou seja pra usa-las vc precisa salvar ela em alguma variavel
    return 2*a
}

dobro = a => 2 * a //podemos tirar os parenteses se tivermos um unico parametro. e quando tiramos as chaves, temos um retorno implicito, que sao usados nos casos que temos uma funcao de uma unica linha.

console.log(dobro(5))

//Outro exemplo

let ola = function() {
    return 'Ola'
}

ola = () => 'Ola' //Os parenteses sao obrigatorios quando n existem parametros

ola = _ => 'Ola' // Outra forma nao tao comum de se escrever funcoes sem parametros, onde os parenteses sao trocados pelo _ mas n é mto comum.

console.log(ola())

