/*13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */

function semana(n) {
    switch(n) {
        case 1:
            return `Domingo`
            break
        case 2: case 3: case 4: case 5: case 6:
            return `Dia util`
            break
        case 7:
            return `Sabado`
            break
        default:
            return `Numero invalido`
    }
}

console.log(semana(1))
console.log(semana(3))
console.log(semana(6))
console.log(semana(7))
console.log(semana(2))
console.log(semana(9))
console.log(semana(0))
