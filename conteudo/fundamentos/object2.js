console.log(typeof Object)//Isso se trata de uma funcao
console.log(typeof new Object)//agr cm esse new, estamos instanciando uma funcao. é como se fosse o __init__ do python. ou seja o construtor

const Cliete = function() {}
console.log(typeof Cliete)
console.log(typeof new Cliete)

class Produto {} //ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto)