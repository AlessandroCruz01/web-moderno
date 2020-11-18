/*17)​ Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo: Plano Aumento A10% B15% C20% Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido*/

const aumento = (salario, plano) => {
    switch(plano) {
        case 'A':
            return salario + ((salario/100)*10)
            break
        case 'B':
            return salario + ((salario/100)*15)
            break
        case 'C':
            return salario + ((salario/100)*20)
            break
        default:
            return 'Plano inválido!'
    }
}

console.log(aumento(1500, 'A'))
console.log(aumento(1500, 'B'))
console.log(aumento(1500, 'C'))
console.log(aumento(1500, ''))
