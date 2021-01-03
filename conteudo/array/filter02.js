Array.prototype.filter2 = function(callback) {
    const retorno = new Array
    for (let i = 0 ; i < this.length ; i++){
        if ((callback(this[i], i , this)) === true){
            retorno.push(this[i])
        }
    }
    
    return retorno
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad', preco: 4199, fragil: false },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plastico', preco: 18.49, fragil: true }
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

const filtro = function(e){
    if ((e.fragil === true) && (e.preco >= 500)){
        return true
    }
}

console.log(produtos.filter2(caro))
console.log(produtos.filter2(fragil))
console.log(produtos.filter2(filtro))
console.log(produtos.filter2(caro).filter2(fragil))

