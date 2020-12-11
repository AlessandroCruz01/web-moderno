/*23)​ Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/

const media = (codAluno, a1, a2, a3) => {
    if (a1 > (a2 && a3)) {
        let nota = (a1/4) + (a2/3) + (a3/3)
        if (nota >= 5){
            return `Aluno ${codAluno}: APROVADO com média ${nota.toFixed(2)}`
        } else if (nota < 5 ) {
            return `Aluno ${codAluno}: REPROVADO com média ${nota.toFixed(2)}`
        }
    }
}

console.log(media(01, 10,5,6))