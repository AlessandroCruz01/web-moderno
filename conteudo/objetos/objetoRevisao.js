// Objeto - colecao dinamica de pares chave-valor

const produto = new Object //é uma forma de criar um objeto a partir do operador new usando a funcao object
produto.nome = 'Cadeira' //podemos usar o identificador ponto
produto['marca do produto'] = 'Generica' // e usando chochetes
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca do produto']

console.log(produto)

//agora vamos criar um objeto mais complexo

const carro = {//perceba que temos um objeto carro
    modelo: 'A4',//pares chaves - valor
    valor: 89,
    proprietario: { //atribuitps cm outros objetos
        nome: 'Eai',
        idade: 56,
        endereco: {
            logradouro: 'rua ai',
            numero: 123
        }
    },
    condutores: [{
        nome: "juniior"
    }, {
        nome: 'felipe'
    }],
    calcula: function() {
        // ... 
    }
}

console.log(carro)

//acessando atributos a partir da notacao ponto
carro.proprietario.endereco.numero = 1000

//acessando a partir de strings
carro['proprietario']['endereco']['logradouro'] = 'teste de fora'

console.log(carro)

delete carro.condutores
delete carro.calcula
