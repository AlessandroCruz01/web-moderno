//Aula para mostrar a difenca do uso e nao uso do callback

//NOSSO EXEMPLO:
//TEMOS UM ARRAY DE NOTAS E TEMOS O OBJETIVO DE PEGAR TODAS AS NOTAS MENORES DO QUE 7 E PASSAR PARA OUTRO ARRAY

const notas = [7.7, 6.5, 5.2, 3.6, 7.2, 9.0, 10.0, 5.3, 9.5]

//EXEMPLO SEM CALLBACK
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)


//EXEMPLO COM CALLBACK

const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})//filter é uma funcao de array que serve para filtrar elementos de um array a pártir de determinado criterio ( no nosso caso vamos usar uma funcao callback como criterio)
console.log(notasBaixas2)

//EXEMPLO COM CALLBACK EM FORMATO DE ARROW FUNCTION

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

//perceba que sem callback, temos muito mais trabalho. entrar fazer farredura, testes e tudo mais