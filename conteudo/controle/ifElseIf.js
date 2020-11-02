Number.prototype.entre = function( inicio, fim ) { /* A propriedade Number.prototype representa o protótipo para o construtor Number.
     Todas instâncias Number herdam de Number.prototype. O objeto 'prototype' do construtor Number pode ser modificado para afetar todas instâncias Number.*/
    return this >= inicio && this <= fim // Estamos usando number, entao se é um number podemos acessar seu valor atual a partir de this
}

const imprimirResultado = function(nota) {
    if (nota.entre(9,10)) {
        console.log('Quadro de honra')
    } else if (nota.entre(7,8.99)) {
        console.log('Aprovado')
    } else if (nota.entre(4,6.99)) {
        console.log('Recuperacao')
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota invalida')
    }
} 

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(4)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)
