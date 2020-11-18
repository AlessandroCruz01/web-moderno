const cardapio = ( cod, qtd ) => {
    switch(cod){
        case 100:
            return `Total  R$ ${3.00 * qtd}`
            break

        case 200:
            return `Total  R$ ${4.00 * qtd}`
            break

        case 300:
            return `Total  R$ ${5.50 * qtd}`
            break

        case 400:
            return `Total  R$ ${7.50 * qtd}`
            break
    
        case 500:
            return `Total  R$ ${3.50 * qtd}`
            break

        case 600:
            return `Total  R$ ${2.80 * qtd}`
            break

        default:
            return 'Produto não existe'
    }
}

console.log(cardapio(100, 5))
console.log(cardapio(200, 5))
console.log(cardapio(300, 5))
console.log(cardapio(400, 5))
console.log(cardapio(500, 5))
console.log(cardapio(600, 5))
console.log(cardapio(700, 5))
