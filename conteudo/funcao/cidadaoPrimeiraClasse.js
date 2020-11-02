//  funcao em js é :

//First-Class Object (Citizens) 
    /*significa que uma determinada entidade (como uma função) suporta todas as propriedades operacionais inerentes a outras entidades; propriedades, como poder ser atribuído a uma variável, transmitido como um argumento de função, retornado de uma função, */

//Higher-order function
    /*Uma das características do JavaScript que o torna adequado para programação funcional é o fato de que ele pode aceitar funções de ordem superior. Uma função de ordem superior é uma função que pode receber outra função como argumento ou que retorna uma função como resultado. */

// Isso tudo quer dizer que podemos ver que podemos tratar a funcao como um dado, passando ela como parametro, dando um retorno de uma funcao. usar funcao como parametro...

//JS é uma linguagem multi paradigma.

//Criando funcoes....

//forma literal:
'function fun1() {} //Uma funcao retorna PELO MENOS um undefined... caso esteja vazia! (O bloco é obrigatorio!)'

//armanar funcao em uma variavel:
    const fun2 = function () {} //Perceba que a falta do nome da funcao a torna em uma funcao anonima. armazenada em uma variavel

//armazenar em um Array:
    const array = [function (a, b) { return a+b}]//, fun1, fun2]//pode-ser armazenar a propria funcao, ou outras funcoes ja criadas como exemplo do fun1 e fun2
        //Beleza mas como executo uma funcao dentro de um array?
    //R:
    console.log(array[0] (2,3)) //perceba que chamamos o array no indicie 0 ou seja pegamos a primeira funcao e em seguida passamos os parametros...

//armazenar em um atributo de objeto
    const obj = {}
    obj.falar = function () { //percebe aque dentro de um objeto criuamos um atributo falar que recebe a funcao
        return 'Opa'
    }
    console.log(obj.falar())//chamada da

//passar funcao como parametros
    function run(fun) {//passamos uma funcao como parametros
        fun()//chama ela dentro do codigo
    }
    run(function() { console.log('Exec...' )})//chamamos a funcao run e passamos como parametro outra funcao..

// Uma funcao pode retornar e conter uma outra funcao
    function soma(a,b) {//perceba que criamos uma funcao que recebe dois parametros...
        return function (c) { //logo em seguida temos um retorno de uma outra funcao que ainda pede um 3° parametro...
            console.log(a+b+c) // so ai temos o calculos
        }
    }

    soma(2,3)(3)//para invocar essa funcao temos a seguinte estrurua... se soma é uma funcao, logicamente chamados soma() pedindo os dois parenteses. mas o return de soma logo de cara é uma outra funcao anoniuma que pede outro paramentro. ou seja é como se tivessemos soma()()...

    //temos outra alternativa de invocar que é salvando a funcao é uma variavel:
    const outra = soma(2,3) //perceba, chamamos a funcao pai soma() que sera salvo em uma variavel. ou seja outra agr é uma funcao tbm...
    outra(4)