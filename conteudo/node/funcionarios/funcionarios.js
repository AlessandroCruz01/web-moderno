const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')//Importamos o axios, o axios é um client http, ele faz requisicoes web vamos ver alguns metodos mas mais a frente vamos ver mais a fundo!

/*axios.get(url).then(response => {
    const funcionarios = response.data

    //DESAFIO!
    //OBTER A MULHER CHINESA COM MENOR SALARIO! 

        const filtro = function(e){
            if ((e.genero === 'F') && (e.pais === 'China')){
                return true
            }
        }
        const mulheresChinesas = funcionarios.filter(filtro)//filtro para trazer todas as mulheres chinesas

        const salariosMulheres = mulheresChinesas.map(e => e.salario) //mapear por salarios

        const filtro2 = function(e) {
            if (e.salario === Math.min(...salariosMulheres)){ //trazer a unica cm menor salario!
                return true
            }
        }

        console.log(mulheresChinesas.filter(filtro2))

        //RESPOSTA - Shela
})*/

//****************************************************************************************************************** */

//Explicacao -> Para resolver este problema precisamos de 3 funcoes
// 1 - filtrar todos os chineses
// 2 - filtrar todas as mulheres
// 3 - funcao de agregacao para pegar o menor salario

const chineses = e => e.pais === 'China'
const mulheres = e => e.genero === 'F'
const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
}

axios.get(url).then(response => {

    const funcionarios = response.data
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)
    
    console.log(func)

})



 