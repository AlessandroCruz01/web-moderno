let num1 = 1
let num2 = 2

num1++ //forma pos fixada
console.log(num1)

num1--
console.log(num1)
// --num1 //Pre fixada.  a forma pre fixada tem uma precedencia maior
// console.log(num1)

console.log(++num1 === num2--) //segundo a procedencia, o true ocorre nesse momento porque primeiro o que sera feito ele vai incremnetar ++num1 ou seja ele passa a valer 2 e ja em seguida ja faz a comparacao ou seja nesse momento o num2-- ainda n foi executado. por isso o true no final.

// nao misture varios operadores... por exemplo o certo ai seria, incrementar primeiro pra depois comparar e nao incrementar ja na comparacao!