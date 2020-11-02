/* CONCEITO DE FUNCAO

IMAGINE UMA FUNCAO COMO UMA RECEITA DE BOLO, A FUNCAO É UM VERBO É UMA ACAO. ELA EXECUTA UM BLOCO DE PASSOS.
UMA FUNCAO NADA MAIS É QUE UM TRECHO DE CODIGO REFERENCIADO POR UM VERBO E NO FINAL RETORNA UM RESULTADO

OU SEJA UMA FUNCAO AGRUPA UM BLOCO DE CODIGO, ESSE BLOCO DE CODIGO VC PODE DAR UM NOME A ELE PARA QUE POSSA SER CHAMADO EM QQ PARTE DO CODIGO QUANTAS VEZES QUEISER, A FUNCAO PODE RECEBER PARAMETROS OU N, E PODE RETORNAR ALGO OU N
*/

//FUNCAO SEM RETORNO:

function imprimirSoma(a, b) { //   A e B SAO PARAMETROS, A ABERTURA DE CHAVES INDICA O BLOCO DE CODIGO
    console.log(a + b) //BLOCO DE CODIGO
}


imprimirSoma(2,3)
imprimirSoma(2) //Uma estranhesa do JS é que vc pode mandar apenas um parametro, msm sendo 2 o 2° fica undefined por padrao
imprimirSoma(2,10,4,5,6) //Voce tbm pode mandar mais parametros do que os pedidos, e a linguiagem vai pegar os dois que precisam e o resto sera ignorado e fds kkkkk

//FUNCAO COM RETORNO

function soma(a, b=0){ //No ECMA SCRIPT 2015, agr voce ja pode manda um paramentro cm um valor padrao. ex b=0
    return a + b
}

console.log(soma(2,3)) //neste caso devemos colocar dentro de um console.log pq na funcao há um retorno e n um metodo de printar na tela

console.log(soma(2))