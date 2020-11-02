//Construir uma base solida é mais custoso!

//funcoes anonimas podem ser passadas para ser executas por outras funcoes ou armazenar em variaveis

const soma = function (x, y) {//funcoes anonimas sao funcoes sem nomes!
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b)) //operacao recebe como parametro a const soma que contem uma funcao anonima de soma 
}

imprimirResultado(3,4)
imprimirResultado(3,4, soma )
imprimirResultado(3,4, function (x,y) {//podemos passar uma funcao anonima direto
    return x - y
})

imprimirResultado(3,4, (x , y) => x*y) // arrow function é sempore anonima

const pessoa = {
    falar : function () {
        console.log('Opa')
    }
}

pessoa.falar()