/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

const jurosSimples = (capitalInicial = 0, juros = 0.0, tempo = 0) => {
    return `Os juros simples são de R$ ${capitalInicial * tempo * juros} dando o valor total de R$ ${capitalInicial +(capitalInicial * tempo * juros)} após o periodo de ${tempo} ano(s)` 
}

const jurosCompostos = (capitalInicial = 0, juros = 0.0, tempo = 0) => {
    return ``
}
console.log(jurosSimples(1000.00, 0.1, 3))
console.log(jurosCompostos(100.00, 0.1, 3))
