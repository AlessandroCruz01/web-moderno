const multiplicar = (x, y) => {
    if (x >= 0 && y >= 0){
        return x*y
    } else {
        return 'Somente numeros positivos'
    }
}

console.log(multiplicar(5,5))
console.log(multiplicar(0,7))