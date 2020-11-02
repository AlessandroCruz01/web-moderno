//usando a desestruturacao no nivel de array

function rand([ min = 0, max = 100 ]) {
    if (min > max) [min, max] = [max, min] //se o min for maior que o max, temos que inverter. no caso usamos o destructuring onde o min e max recebe max e min ou seja invertemos
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) //arrendondamento para baixo
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([]))