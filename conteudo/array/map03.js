Array.prototype.map2 = function(callback) {
    let retorno = new Array()
    for (let i = 0 ; i < this.length ; i++){
        retorno.push(callback(this[i], i, this ))
    }
    return retorno
}

const carrinho = [
    '{ "nome": "Borracha" , "preco": 3.45 }',
    '{ "nome": "Caderno" , "preco": 13.90 }',
    '{ "nome": "Kit de Lapis" , "preco": 41.22 }',
    '{ "nome": "Caneta" , "preco": 7.50 }',
]


//retornar um array apenas com os precos
const tranforma = e => JSON.parse(e)//Funcao para tornar o JSON em objeto
const pegaprecos = e => e.preco//funcao para pegar somente o atributo preco desses objetos

let precos = carrinho.map2(tranforma).map2(pegaprecos)
console.log(precos)