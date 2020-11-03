/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/

function tipoDeTriangulo( lado1, lado2, lado3) {
    if (lado1 === lado2 && lado3 == lado1) {
        console.log('Equilátero')
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log("Isóceles")
    } else {
        console.log('Escaleno')
    }
}

//testes para Equilatero
tipoDeTriangulo(5,5,5)

//testes para Isóceles (um diferente)
tipoDeTriangulo(3,5,5)
tipoDeTriangulo(5,3,5)
tipoDeTriangulo(5,5,3)

//testes para Escaleno
tipoDeTriangulo(1,2,3)
