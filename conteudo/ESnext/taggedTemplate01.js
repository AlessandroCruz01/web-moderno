// tagged templates - processa template strng dentro de uma funcao
function tag (partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'outra string'
}

const aluno = 'Gui'
const situcao = 'Aprovado'
console.log( tag ` ${aluno} está ${situcao} `)