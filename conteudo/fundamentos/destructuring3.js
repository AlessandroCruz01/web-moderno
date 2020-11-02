function rend({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) //o floor retorna o menor numero inteiro dentro o numero passado por parametro... por exemplo, Math.floor(7), ele vai buscar o menor numero inteiro até 7
}
const obj = {max: 50, min:40}
console.log(rend(obj))
//Uma outra possibilidade é passando apenas os valores de min e max
console.log(rend({ min: 955 }))
console.log(rend({}))
//console.log(rend())