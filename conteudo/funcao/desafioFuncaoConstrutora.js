//desafio.. Escrever a mesma classe a baixo em formato de funcao factory...

/*
class Pessoa {
    constructor(nome) {//constructor(nome) { equivale ao def __init__(self): do python
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
*/

//minha resposta...
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

p1 = criarPessoa('Marcio')
p1.falar()
p3 = criarPessoa('Lucas')
p3.falar()


//correcao
function Pessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p2 = new Pessoa('Joao')
p2.falar()