// Closure é o escopo criado quando uma funcao é declarada
// Esse escopo permite a funcao e manipular variaveis externas a funcao

//Lembre-se da aula de contexto lexico

//Contexto lexico em acao!
const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())//Perceba que o que vimos na ultima aula onde foi citado que a funcao sabe onde ela foi definida e seu contexto... O nome desse efeito é justamente o Closure garotinho!

//Funcoes sao Humildes elas nunca esquecem de suas origens kkkk