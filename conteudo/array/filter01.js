//uma outra forma interessante de percorrer um array, é o filter, no caso ele percorre um array com o imtuito de filtrar dados retirando os dados que nos interessam!

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plastico', preco: 18.49, fragil: true }
]

console.log(produtos.filter(function(p){
    return false
}))