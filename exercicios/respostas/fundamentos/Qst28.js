/*28)​Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. */

const vetor = (array) => {
    for (i in array) {
        if (i%2==0){
            console.log(i)
        }
    }
}

vetor([1,2,3,4,5,6,7,8,9,10,11])