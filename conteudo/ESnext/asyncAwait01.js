//vamos pegar um exemplo de promises que fizemos...

function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(() => resolve(), tempo)
    })
}

//Uma coisa importante com relacao a async await, é que nao podemos usar a palavra await diretamente dentro de um arquivo! por exemplo
    // await esperarPor(3000) - neste caso vai dar um erro, porque o await só é valido dentro de uma funcao assincrona.
        // entao precisamos criar uma funcao assincrona para usar o await

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/funcoes_assincronas
        
// resumidamente o async await serve para fazer com que codigos assincronos ajam como codigos sincronos, por exemplo vamos ver como funciona dentro de uma promise e apos vamos fazer o mesmo codigo usando o async

// esperarPor(2000)
//     .then( () => console.log('Executando promise 1...'))
//     .then(esperarPor)
//     .then( () => console.log('Executando promise 2...'))
//     .then(esperarPor)
//     .then( () => console.log('Executando promise 3...'))
//     .then(esperarPor)
    //Perceba que o codigo acima, resolve uma linha e vai pra procima depois resolve a outra e vai pra proxima. de forma sincrona!

//Vamos ver como funciona em async

// async function executar() {
//     esperarPor(2000)
//     console.log('Async Await 1')

//     esperarPor(2000)
//     console.log('Async Await 2')

//     esperarPor(2000)
//     console.log('Async Await 3')

    //Primeiramente nao vamos usar o await, perceba que ele vai executar tudo de uma vez, vai esperar 2 segundos e vai acabar a execução

// }

// executar()

//No caso a intencao seria que ele esperasse que os cogidos fossem executados linha a linha, precisamos colocar o await na frente da funcao... perceba...

async function executarAwait() {
    await esperarPor(2000)
    console.log('Async Await 1')

    await esperarPor(2000)
    console.log('Async Await 2')

    await esperarPor(2000)
    console.log('Async Await 3')

}

executarAwait()

//POR TRAZ DE UMA ASYNC AWAIT TEMOS UMA PROMISE!

