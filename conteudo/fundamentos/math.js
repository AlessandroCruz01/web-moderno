const raio = 5.6
const area =  Math.PI * Math.pow(raio, 2)

console.log(area)
console.log(typeof(Math)) // OO math é apenas um objeto, que contem uma CONSTANTE CHAMADA PI, e uma funcao chamda pow que faz a exponenciacao. perceba, e lembre-se da POO, pq é a msm coisa é como se math fosse um ibjeto que contesse parametros e funcoes dentro dele.

console.log(typeof(Math.PI)) //perceba que PI é uma constante do tipo number
console.log(typeof(Math.pow)) // e como foi dito o pow é um metodo ou function
console.log(area.toFixed(2))