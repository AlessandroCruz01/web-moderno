var a = 3
let b = 4 //Por regra geral, usar variaveis utilizando o let
const c = 5 //Obviamente, se é constante, seu valor nao pode ser alterado


var a = 6 // usando o var, vode pode declarar duas vezes a msm variavel dentro do msm escopo. Por isso sempre precisamos ir pro lado do let
b = 7

console.log(a, b) //Perceba que usando o var, voce pode redeclarar variaveis dentro de um mesmo escopo, usando let isso n ocorre


a = 300
b = 400

console.log(a, b)
console.log(c)