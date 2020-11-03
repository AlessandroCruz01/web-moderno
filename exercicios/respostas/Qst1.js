/* 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/

function Operacoes( x=0, y=0 ) {
    console.log(`Soma: ${x} + ${y} = ${x+y}`)
    console.log(`Subtração: ${x} - ${y} = ${x-y}`)
    console.log(`Multiplicação: ${x} x ${y} = ${x*y}`)
    console.log(`Divisão: ${x} / ${y} = ${x/y}`)
}

Operacoes(5,5)