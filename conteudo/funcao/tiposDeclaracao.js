//vamos ver algumas observacoes nos tipos de declaracao de funcao

//tipo tradicional : Function declaration
function soma( x , y ) { //function <nome da funcao>(<parametros>) { <bloco de codigo }
    return x + y
}

//function expression - declara a funcao ja atribuindo ela a uma variavel ou constante
const sub = function ( x,y ) {
    return x - y
}

//named function expression - mistura dos dois acima, armazenando uma funcao NOMEADA a uma variavel ou constante (pouco usada)
const mult = function mult( x, y ) {
    return x * y
}

/* EXISTE UMA PEQUENA OBSERVACAO SOBRE A FORMA DE DECLARACAO FUNCTION DECLARATION E NAMED FUNCTION EXPRESSION, ONDE CASO VC USE O PRIMEIRO CASO DE DECLARACAO, VC PODE CHAMA-LA MESMO ANTES DELA SER DECLARA. POIS O INTERPRETADOR DO JS CARREGA PRIMEIRO AS FUNCOES PARA DEPOIS O RESTANTE DO CODIGO. NOS OUTRPOS CASOS ELA SO PODE SER USADA APOS SER DECLARADA! */