//Vamos ver estruturas de repeticao

//while - é uma estrutura preparada para os casos em que nao sabe-se a quantidade de repeticoes... ou seja o while é focado em repeticoes indeterminadads de vezes...

//pensemos assim - 
//Tem quantidade determinada = FOR
//Nao tem quantidade determinada = WHILE
//Selecao multipla - SWICH

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while ( opcao != -1 ) {//Expressao que pode ser verdadeiro ou falso (while executa 0 ou N vezes)
    opcao = getInteiroAleatorioEntre(-1, 10)//Enquanto for verdade ele executa o bloco
    console.log(`Opcoes escolhidas foram ${opcao}.`)
}

console.log('Fim')