/*16)​ Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa recebe como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’.  Crie um caso default para operações inválidas. */

const calculadora = (n1 = 0, n2 = 0, op) => {
    switch(op) {
        case '+':
            return `Soma: ${n1} + ${n2} = ${n1+n2}`
            break
        case '-':
            return `Subtração: ${n1} - ${n2} = ${n1-n2}`
            break
        case '*':
            return `Multiplicação: ${n1} x ${n2} = ${n1*n2}`
            break
        case '/':
            return `Divisão: ${n1} / ${n2} = ${n1/n2}`
            break
        default:
            return 'Inválido!'
    }
}

console.log(calculadora(5, 7, '*'))
console.log(calculadora(5, 7, '+'))
console.log(calculadora(5, 7, '/'))
console.log(calculadora(5, 7, '-'))
console.log(calculadora(5, 7, '**'))
