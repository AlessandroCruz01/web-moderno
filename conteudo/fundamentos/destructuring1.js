// O operador destructuring foi adicionado ao js cm o ES2015, ele é um operador de desestruturacao, ele tira algum elemento de uma estrutura. Ele tem duas formas de escrita. no objeto se usa {} e no array se usa [];

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        rua: 'uma ai',
        numero: 1000
    }
}

//usando o destructuring...
 
const { nome, idade } = pessoa // Aqui estamos dizendo. Crie duas variaveis 'nome' e 'idade' retirando os valores do objeto = pessoa...
console.log(nome, idade)

const {nome: n, idade: i} = pessoa //Pode ter ficado um pouco confuso na questao dos nomes.. mas agr vai ficar melhor de se entender... observe ( retire os valores do atributo 'nome' e atribua a variavel 'n' e retire o valor do atributo 'idade' e atribua a variavel 'i' isso tudo de dentro do objeto pessoa)
console.log(n, i)//quando mandarmos printar na tela... o msm efeito ocorre

//mas e se o atributo n existir dentro do objeto
const {sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado)//como vimos no primeiro caso, como essa variavel n existe o js nos retorna undefined, ja no segundo coomo cetamos um valor padrao de true, ele retorna o valor padrao

//e para pegar o endereco que esta em outr estrutura?
const {
    endereco: 
    {
        rua,
        numero,
        cep
    }
} = pessoa
console.log(rua, numero, cep)//como vimos o cep n existe, entao ele vira cm undefined