const escola = [{
    nome: 'Turma01',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Fernando',
        nota: 7.5
    }]
}, {
    nome: 'Turma02',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberta',
        nota: 7.5
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const nota1 = escola.map(getNotasDaTurma)
console.log(nota1)

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)