console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)//Perceba que o module.exports continua apontando para a msm referencia! Perceba que a unica coisa que é retornada por um modulo é module.exports

console.log(module.exports)

//O formato certo de exportar um objeto é:
module.exports = { publico: true }


console.log(module.exports)