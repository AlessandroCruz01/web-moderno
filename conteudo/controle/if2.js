function teste1(num) {
    if (num > 7)//perceba que nao usamos os blocos {}... pensando nisso neste caso o uso dos blocos em js ele é opcional dentro da estrutura if... (lembrando que js n é baseado em identacao)... entao no caso o restante do codigo sera levado para if...
        console.log(num)

    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if (num > 7); { //neste caso ele vai printar todos os valores. ja que o if termina em ponto e virgula. ou seja é como se fosse assim: if (num > 7) {} com um bloco vazio... ou seja n use ponto e virgula em definicoes de bloco 
        console.log(num)
    }
}

teste2(6)
teste2(8)