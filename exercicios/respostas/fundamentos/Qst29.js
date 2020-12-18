/*29)​Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo, escrevendo estas informações. */
let dentro = 0
let fora = 0
const intervalo = (array) => {
    for (i in array) {
        if (array[i] >= 10 && array[i] <= 20) {
            dentro += 1
        } else {
            fora += 1
        }
    }
    return (`Existem ${dentro} elementos dentro do intervalo de 10-20 e ${fora} deste intervalo`)
}

console.log(intervalo([1,2,3,10,11,20]))