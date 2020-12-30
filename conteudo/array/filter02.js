Array.prototype.filter2 = function(callback) {
    const retorno = new Array
    for (let i in this){
        // if (callback(this[i], i, this) === true){
        //     retorno.push(this[i])
        // }
        // return retorno
        return i
    }
}


const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plastico', preco: 18.49, fragil: true }
]


const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro))

// const filtro = function(e){
//     if ((e.fragil === true) && (e.preco >= 500)){
//         return true
//     }
// }

// console.log(produtos.filter2(filtro))