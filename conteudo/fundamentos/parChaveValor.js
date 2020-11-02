// par nome / valor

//Um objeto é uma colecao de chave - valor

const saud = 'Opa' //observe que ate msm a declaracao de variavel é uma juncao de chave valor. nesta declaracao temos um contexto chamado lexico.

//contexto lexico é o local onde sua variavel foi definida fisicamente... por exemplo window -> global

function exec() {
    const saud = 'Falaaa' //Contexto lexico 2
    return saud //observe que vc pode usar a msm variavel em contextos lexicos diferentes
}

//Objetos sao grupos aninhados de pares chave/valor

const cliente = {
    nome : 'Pedro',
    idade : 32,
    peso : 90,
    endereco : {
        logradouro :  'Rua tal ',
        numero : 123
    }
}

console.log(saud)
console.log(exec())
console.log(cliente)