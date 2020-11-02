//exercicio, crie uma funcao factory para criacao de objetos a partir de perametros

function criarProduto(nome, preco, desc=5) {
    return {
        nome: nome,// nao é necessario nome: nome, pq o parametro ja vem cm ele
        preco,
        desconto: desc
    }
}

console.log(criarProduto('sabonete', 35.90))