//Vamos ver a diferenca entre ter um codigo mais declarativo e outro mais imperativo. vejamos um exemplo:

const alunos = [
    { nome: 'Joao', nota: 7.9 },
    { nome: 'maria', nota: 9.2 }
]

//IMPERATIVO
let total1 = 0
for (let i = 0 ; i < alunos.length ; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)


//DECLARATIVO
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)