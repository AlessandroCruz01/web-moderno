//para importar usando o commons, precisamos do require
const moduloA = require('./moduloA')//perceba que vc nao é obrigado a usar o .js
const { boaNoite } = require('./moduloB')
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)
