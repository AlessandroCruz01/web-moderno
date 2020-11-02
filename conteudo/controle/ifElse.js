const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa')//Uma observacao é que como js é fracamente tipado. mandando uma string ao inves de dar erro. ele retorna cm o resultado  do else... NO CASO VAMOS PRECISAR FAZER TESTES DE INTEGRIDADE PARA SABER SE O PARAMETRO RECEBIDO É REALMENTE O QUE ESPERAMOS. E NESTE CASO PODEMOS CRIAR UMA EXCESSAO USANDO O TRY...