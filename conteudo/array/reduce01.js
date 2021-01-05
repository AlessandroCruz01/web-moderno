//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

//O reduce serve para percorrer um array e torna-lo em um unico elemento. É como se fosse as funcoes recursivas em python pq no caso ele vai ter um acumulador

const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 7.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: false}
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map (a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}/*Podemos adicionar o valor inicial depois do callback */)

console.log(resultado)