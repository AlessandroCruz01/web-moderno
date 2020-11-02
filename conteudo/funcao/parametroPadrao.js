//Um outro recurso que foi adicionado ao ES2015, foi o recurso de parametro padrao... mas isso n significa que antes de 2015 n haviam formas de se add parametros padroes... nesta aula vamos ver um geralzao de antes de 2015 e como é feito hj em dia!

//estrategia 1
// para gerar valor padrao - Esta estrategia usa o operador || (ou), caso o operando seja falso. neste caso temos alguns sintomas colaterais...
function soma1(a , b , c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}


//testes
console.log(soma1())
console.log(soma1(3))
console.log(soma1(3))
console.log(soma1(1,2,3))
//os problemas se darao quando se passar valores zeros 0. lembre-se 0 == false. e o || pega o valor verdade. ou seja nos zeros ele n validara;
console.log(soma1(0,0,0))
console.log()

//estrategia 2 , 3 e 4 para gerar valor padrao
function soma2 (a,b,c) {
    a = a !== undefined ? a : 1 // 2° - se o a for diferente de undefined, o a vai receber 1
    b = 1 in arguments ? b:1 // 3° - dentro de arguments existe o indicie 1 ? (ja que estamos testando o b que é o segundo parametro pedido entao dentro de arguments que é um array ele assume o indice 1) se n existir pegue o valor 1
    c = isNaN(c) ? 1:c // se nao for um numero ele pega o valor padrao . se nao ele pega o valor dado por padrao...
    return a + b + c
} 


//testes
console.log(soma2())
console.log(soma2(3))
console.log(soma2(3))
console.log(soma2(1,2,3))
//os problemas se darao quando se passar valores zeros 0. lembre-se 0 == false. e o || pega o valor verdade. ou seja nos zeros ele n validara;
console.log(soma2(0,0,0))
console.log()


//Valor padrao usando o ES2015

function soma3(a=1,b=1,c=1) {
    return a+b+c
}

//testes
console.log(soma3())
console.log(soma3(3))
console.log(soma3(3))
console.log(soma3(1,2,3))
//os problemas se darao quando se passar valores zeros 0. lembre-se 0 == false. e o || pega o valor verdade. ou seja nos zeros ele n validara;
console.log(soma3(0,0,0))