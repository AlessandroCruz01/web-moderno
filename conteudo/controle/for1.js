let contador = 1
while ( contador <= 10 ) {
    console.log(`Contador ${contador}`)
    contador++
}

for (let i = 1 ; i <= 10 ; i++) { //no for temos a seguintes sintaxe... (declaracao de variavel ; teste logico ; incremento)
    console.log(i)
}

const notas = [6.7 , 6.6 , 9.5 , 7.7]
for (let i=0 ; i<notas.length ; i++) { //o length retorna o tamanho do array
    console.log(`Nota = ${notas[i]}`)//colocando cm o indicie ele acessa o valor armazenado
    console.log(i) //colocando o i sozinho ele retorna o indicie..
}