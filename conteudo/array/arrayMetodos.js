const pilotos = ['Vettel', 'Alonso', 'Raikkon', 'Massa']//perceba que o array esta atribuido a uma constante, o que significa que nao podemos atribuir outra coisa diretamente para pilotos ou seja como sendo uma const ela sempre vai apontar para um array, ja os elementos do array esses sim podemos alterar!

pilotos.pop() // o pop remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('senna')//Como ja foi citado o push adiciona elementos no fim do array
console.log(pilotos)

pilotos.shift()// tal como ocorre com o pop, o shift tambem remove porem ele remove o primeiro elemento da lista!
console.log(pilotos)

pilotos.unshift('Hamilton')// da mesma forma que o shift remove o primeiro da lista no caso do onshift ele ADICIONA ao inicio da lista
console.log(pilotos)

//Como vimos anteriormente o splice serve para adicionar e remevore elementos, vamos ver mais detalhadamente agora:

//Adicionar:
pilotos.splice(2, 0, 'Bottas', 'Massa')//Entendedo: como foi dito o primeiro parametro desta funcao é a partir de qual indicie queremos mecher, o segundo é quantos elementos queremos remover no caso colocamos 0 pq nao queremos remover ninguem, e apos isso podemos adicionar elementos separados por vingula. perceba que eles serao adicionados apos o 2° indicie do array
console.log(pilotos)

//remover
pilotos.splice(3, 1)// removemos o elemento no indicie 3
console.log(pilotos)

const outroArray = pilotos.slice(2, 5)//perceba que digitamos SLICE e nao SPLICE! este metodo serve para copiar um array, no caso ele pede por parametro o numero do indicie para que a partir deste indicie ele copie o array, no caso mandamos ele criar um novo array com os elementos de piloto a partir do indicie 2! (SLICE QUER DIZER PEDAÇO!), podemos tambem mandar dois parametros, sendo o do indice que mandarmos ate o indicie que queremos -1
console.log(outroArray)
