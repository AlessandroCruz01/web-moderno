//existem mais dois metodos para chamar funcao. veremos:

function getPreco(imposto = 0, moeda = 'R$') {//os parametros foram passados intencionalmente pois a diferenca do call e do apply esta justamnente na forma que se passa os parametros
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)} `
}

const produto = {
    nome: 'Notebook',
    preco: 4589, 
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())//perceba que o resultado sera um NaN, pois o this neste contexto esta global. para resolver isso e continuar a aula vamos simplismente declarar esses valores globalmente


//agora vamos chamar a funcao a partir de um objeto
console.log(produto.getPreco())

//temos agora o call e o apply

const carro = { preco: 48990.00, desc: 0.20 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//AGORA VAMOS VER MAIS CLARAMENTE A DIFERENCA ENTRE CALL E APPLY.. QUE É BASICAMENTE E PASSAGEM DE PARAMETROS

console.log(getPreco.call(carro, 0.17, '$'))//no call podemos passar diretamente os atributos sendo o primeiro obrigatoriamente o contexto...

console.log(getPreco.apply(carro, [0.17, '$']))// no apply, temos que passar os parametros dentro de um array, e como acontece cm o call o primeiro parametro da chamada é o contexto...