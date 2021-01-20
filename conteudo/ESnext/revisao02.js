// Arrow Function - ES6
const soma = (a, b) => a + b
console.log(soma(2,3))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
lexico1()

// parametro defaut
function log(texto = 'node') {
    console.log(texto)
}

log()
log('Passei parametro')

// Operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n) //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    return total
}
console.log(total(2,3,4))