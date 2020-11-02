//Nesta aula vamos ver uma funcao auto invocada
//uma funcao que mesmo sendo anonima ela é chamada dentro mas cm escopo local. é usada para tentar fugir do escopo global, lembre-se se uma variavel estar global, outros codigos podema acessar aquele variavel e manipula-la causando bugs.. no node isso nao rola mto pq cada arquivo que criamos aqui é um modulo..


//IIFE -> Immediately Invoked Function Expression
//Basicamnete é uma expressao de funcao imediatamente invocada

(function() {//tudo o que for feito aqui dentro, estara disponivel apenas aqui dentro!
    console.log('Será invoxado na hora!')
    console.log('Foge do escopo mais abrangente')
    //assim que o script é lido, tudo dentro sera executada
})()