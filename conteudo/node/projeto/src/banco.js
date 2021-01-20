const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id //Se o id do produto nao estiver cetado, ele vai chamar o sequence entregando um id
    produtos[produto.id] = produto //perceba existe produtos e produto, produtos é referente ao objeto criado acima e produto é referente ao novo produto a ser cetado!
    return produto
}

function getProduto(id){
    return produtos[id] || {}
}

function getTodosProdutos() {
    return Object.values(produtos)
}

function excluirProduto(id){
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = { salvarProduto, getProduto, getTodosProdutos, excluirProduto }//perceba que os 3 metodos estao cetados para fora, porem o metodo sequence é algo interno deste modulo!

//voltemos para o arquivo server.js