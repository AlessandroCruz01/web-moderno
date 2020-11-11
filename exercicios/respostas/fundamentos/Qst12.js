/* 12) Faça um algoritmo que calcule o fatorial de um número.*/

function fatorial(n) {
    if (n < 0) {
        return `N menor que zero!`
    } else if (n == 0) {
        return 0
    } else if ( n == 1) {
        return 1
    } else {
        let fat = n
        n -= 1
        while (n > 0) {
            fat *= n
            n -= 1
        }
        return fat
    }
}

console.log(fatorial(4))
console.log(fatorial(10))
console.log(fatorial(6))
console.log(fatorial(2))
console.log(fatorial(1))
console.log(fatorial(0))
console.log(fatorial(-1))
