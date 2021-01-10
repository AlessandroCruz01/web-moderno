const sorteio = (x) => {
    let numero = Math.floor(Math.random() * 10)//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    if(x === numero){
        return `Parabéns! O numero sorteado foi ${numero}`
    } else {
        return `Que pena! O numero sorteado foi ${numero}`
    }
}

console.log(sorteio(1))
console.log(sorteio(3))
console.log(sorteio(6))
console.log(sorteio(10))
