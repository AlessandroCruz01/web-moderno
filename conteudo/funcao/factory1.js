//Um padrao de projeto mto comum mto usado dentro do JS sao as funcoes fabricas

//funcao factory é basicamente uma funcao que retorna objetos
//vamos la...

const prod1 = {
    nome:  '',
    preco: ''
}

const prod2 = {
    nome: '',
    preco: ''
}

//perceba que acima temos dois objetos com os mesmos atributos, agora imagine que temos 20 produtos. pense no trabalho que daria escrever produto por produto. dai temos as funcoes factory que servem para resolver este problema...

//factory simples
function criarPessoa() {
    return {
        nome: '',
        sobrenome: ''
    }
}

console.log(criarPessoa())