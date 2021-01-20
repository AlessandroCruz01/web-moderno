// Uma das primeiras coisas que vimos foram as formas de declaracao de variavel...
// ES6 - let const

//Antigamente tinhamo o var, que tinha escopo de funcao e escolo global, ja o let ele tem escopo de bloco! por exemplo...

{
    var a = 2 //perceba que o a podera ser acessado de fora deste pequeno bloco
    let b = 2 //ja o let nao podera ser acessado, porque ele pertence a esse bloco
    console.log(b) //para acessar b precisamos estar no mesmo escopo que ele!
}
console.log(a)

// Template String
const produto = 'iPad'
console.log(`${produto} é caro`)

// Destructuring - retirar um elemento de algo!
const [l, e, ...tras] = 'Cod3er'
console.log(l, e , tras)

const [x, ,y] = [1,2,3]
console.log(x,y)

const { idade, nome } = { nome: 'Ana', idade: 9 }
console.log(nome, idade)