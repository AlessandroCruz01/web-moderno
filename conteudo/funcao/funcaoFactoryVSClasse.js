//classe
class Pessoa {
    constructor(nome) {//constructor(nome) { equivale ao def __init__(self): do python
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Joao')
p1.falar()


//funcao Factory
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)//perceba que neste contexto nao é necessario usar o this
    }
}

const p2 = criarPessoa('Sandro')
p2.falar()


//mas temos algumas questoes importantes. vamos testar esses dois metodos no browser...

/* perceba que quando passamos uma classe para o browser usando o onclick ele nao nos traz o nome joao e sim undefined isso porque o this no caso da classe pode variara. isso ja nao corre com funcao factory */