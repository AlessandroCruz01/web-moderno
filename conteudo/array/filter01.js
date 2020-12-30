//uma outra forma interessante de percorrer um array, é o filter, no caso ele percorre um array com o imtuito de filtrar dados retirando os dados que nos interessam!

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plastico', preco: 18.49, fragil: true }
]
 
//Documentação = https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filtro

const filtro = function(e){
    if ((e.fragil === true) && (e.preco >= 500)){
        return true
    }
}

console.log(produtos.filter(filtro))