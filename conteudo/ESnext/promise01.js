//promise é promessa ou seja é algo que resolveremmos no futuro!

let a = 1 //quando definimos uma variavel, na linha seguinte ja temos ela disponivel para nosso uso!
console.log(a)

    //Quando criamos uma promessa (promise), nós teremos uma promessa de algo que sera executado no futuro e algo que a sera devolvido no futudo. Entao associado a uma promessa teremos um valor de algo, seja um number, string, boolean e etc... para gerarmos esse dado, precisamos passar uma funcao para promise. e lembre-se, uma promise por si so é uma funcao...

console.log(typeof Promise)

    //Ou seja essa funcao recebe como parametro uma funcao quando quiser cumprir a promessa....

let p = new Promise(function(cumprirPromessa){//Uma promessa so recebe um parametro...
    cumprirPromessa([ 'Ana', 'Bia', 'Lucas'])
})

console.log(typeof p)//Perceba que quando a promise quando usada com o operador new ele se torna um objeto

    //Beleza, mas como acessamos o valor que foi gerado? 
        //R= usando o .then 
            //then por sua vez recebe como parametro uma funcao!

p.then(function(valor) { //Uma promessa gera apenas um unico valor, vc pode passar quantos parametros quiser, mas sera considerado apenas o primeiro!
    console.log(valor)//perceba que o resultado é exatamente o valor passado como promessa anteriormente. Nesse caso é como se estivessemos cumprindo a promessa
})

//OBS - O NOMES QUE USAMOS ATE AGORA NAO SAO OS OFICIAIS, ESTAMOS APENAS ENTENDENDO DE FORMA SIMPLES COMO UMA PROMISE FUNCIONA!

    //Umas das vantagens de termos promises, é o fato de podermos chamar o then varias vezes...
p
    .then(nome => nome[0]) //Podemos usar uam arrow function..
    .then(primeiro => primeiro[0])
    .then(letra => letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))

    //Vejamos o passo a passo do que fizemos acima...
        //no primeiro then, pegamos apenas o valor contido na posicao 0 do array
            //em seguida pegamos apenas a letra na posicao 0 deste valor
                //em seguida fizemos a letra ficar minuscula
                    //por fim, mostramos na tela a letra selecionada e ja tratada...

    //pereceba que os valores sao passados de um then para o outro, e podemos chama-lo varias vezes. E como o then recebe uma function como parametro, temos a possibilidade de usar uma function classica, uma arrow function ou ate mesmo, criar um afunction por fora e passar apenas ela como parametro, de todas as formas vai funcionar perfeitamente!

    // Vamos ver um exemplo:


    function segundoElemento(array){
        return array[1]
    }

    function primeiraLetra(string){
        return string[0]
    }

    const mudaLetra = letra => letra.toLowerCase()
p
    .then(segundoElemento)
    .then(primeiraLetra)
    .then(mudaLetra)
    .then(console.log)//Perceba que nao precisamos dizer oque ele deve imprimir na tela, pq ele resolve a partir do metodo, ja trazendo o parametro dando do then anterior